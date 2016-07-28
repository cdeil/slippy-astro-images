import { Component, OnInit, OnDestroy } from '@angular/core';
import { Source } from '../data/source';
import { CatalogService } from '../data/catalog.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var A: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-view',
  templateUrl: 'view.component.html',
  styleUrls: ['view.component.css'],
  providers: [CatalogService]
})
export class ViewComponent implements OnInit {


    // public sources: Source[];
    public catalog;
    source: Source;
    private sub: any;
    public id;

    public aladin;

    getCatalog() {
          // this.catalog = this.catalogService.getCatalog();
          this.catalog = this.catalogService.getCATALOG();
    }

    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private catalogService: CatalogService
    ) {}

    ngOnInit() {

      this.getCatalog();

      this.sub = this.activatedRoute.params.subscribe(params => {
        let id = +params['id']; // (+) converts string 'id' to a number
        this.id = id;
        this.catalogService.getSource(id).then(source => this.source = source);
      });

      this.aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:60});

    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}
