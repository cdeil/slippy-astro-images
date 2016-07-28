import { Component, OnInit, OnDestroy } from '@angular/core';
import { Source } from '../data/source';
import { CatalogService } from '../data/catalog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-source',
  templateUrl: 'source.component.html',
  styleUrls: ['source.component.css'],
  providers: [CatalogService]
})
// export class SourceComponent implements OnInit {
//
//   public sources: Source[];
//   public catalog;
//
//   getCatalog() {
//     this.catalog = this.catalogService.getCatalog();
//   }
//
//   constructor(private catalogService: CatalogService) { }
//
//   ngOnInit() {
//     this.getCatalog();
//   }
//
// }


export class SourceComponent implements OnInit, OnDestroy {

  // public sources: Source[];
  public catalog;
  source: Source;
  private sub: any;
  public id;

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

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
