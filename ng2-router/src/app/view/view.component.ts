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
export class ViewComponent implements OnInit, OnDestroy {

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

    // console.log('ViewComponent ngOnInit()');

    this.aladin = A.aladin('#aladin-lite-div', {
      survey: "P/DSS2/color",
      fov: 60,
      target: "0 +0"
      // target: (this.catalog[this.id].ra).toString() + " " + (this.catalog[this.id].dec).toString()
    });

    this.sub = this.activatedRoute.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.catalogService.getSource(id).then(source => this.source = source);

      this.id = id;

      this.aladin.gotoRaDec(( this.catalog[this.id].ra ), ( this.catalog[this.id].dec ));
      console.log("aladin-lite-div position: ", (this.catalog[this.id].ra).toString() + " " + (this.catalog[this.id].dec).toString());
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
