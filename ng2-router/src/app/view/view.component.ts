import { Component, OnInit, OnDestroy } from '@angular/core';
import { Source } from '../data/source';
import { CatalogService } from '../data/catalog.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ParamsService} from '../params.service';

declare var A: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-view',
  templateUrl: 'view.component.html',
  styleUrls: ['view.component.css'],
  providers: [CatalogService]
  // ParamsService not listed as a provider - I explained in source.component.ts
})
export class ViewComponent implements OnInit, OnDestroy {

  // public sources: Source[];
  public catalog;
  source: Source;
  private sub: any;
  private sub2: any;
  public id;


  public aladin;

  // getCatalog() {
  //   this.catalogService.getData().subscribe(
  //     data => {
  //       console.log(data);
  //       // this.catalog = JSON.parse(data);
  //       this.catalog = data;
  //       console.log('this.catalog ', typeof this.catalog);
  //       this.paramsService.setCatalog(data);
  //     },
  //     err => console.error(err),
  //     () => console.log('working!')
  //   );
  //
  // }


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService,
    public paramsService: ParamsService
  ) {}

  ngOnInit() {

console.log("console.log");

    // this.getCatalog();
    // this.getData();



    // this.catalog = this.paramsService.getCatalog();

    // console.log('ViewComponent ngOnInit()');

    this.aladin = A.aladin('#aladin-lite-div', {
      survey: "P/Fermi/color",
      fov: 60,
      target: "0 +0"
      // target: (this.catalog[this.id].ra).toString() + " " + (this.catalog[this.id].dec).toString()
    });


    this.sub = this.activatedRoute.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number

      this.id = id;
      this.paramsService.setSourceParam(this.id);

      this.catalogService.getData().subscribe(
        data => {
          this.catalog = data;
          console.log(this.catalog);

          this.aladin.gotoRaDec(( this.catalog[this.id].RAJ2000 ), ( this.catalog[this.id].DEJ2000 ));
          // Because the ABOVE LINE MUST be called while this.catalog is being subscribed, we cannot call this.paramsService.getCatalog().
          // Instead we are stuck with this messy subscribe within a subscribe.
          // Perhaps this can be cleaner with a Promise.resolve in the service, and a .then() to call the aladin.gotoRaDec()?
          console.log("aladin-lite-div position: ", (this.catalog[this.id].ra).toString() + " " + (this.catalog[this.id].dec).toString());
        },
        err => console.error(err),
        () => console.log('working!')
      );

    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
