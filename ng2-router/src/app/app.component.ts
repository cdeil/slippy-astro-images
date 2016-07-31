import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET} from '@angular/router';
import {SourceComponent} from './source';
import {ViewComponent} from './view';
import {CatalogService} from './data/catalog.service';
import {Source} from './data/source';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CatalogService]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {

  public sources: Source[];

  // public catalog;
  public selectedSource;
  public selectedView;
  // private sub: any;
  public url;

  // getCatalog() {
  //   this.catalog = this.catalogService.getCatalog();
  // }

  onSourceChange(value) {

    if(value !== null) {
          this.selectedSource = value;
    }

    this.router.navigate([this.selectedView, value]);

    console.log("onSourceChange: ", this.selectedSource);

  }

  onViewChange(value) {
    this.selectedView = value;

    this.router.navigate(["/", value, '/', this.selectedSource]);

    console.log("onViewChange: ", this.selectedView);
  }

  constructor(
    private catalogService: CatalogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.getCatalog();

    this.catalogService.getCatalog()
      .then(sources => this.sources = sources);

    // this.sub = this.activatedRoute
    //   .params
    //   .subscribe(params => {
    //     this.selectedSource = +params['id'];
    //     console.log('in subscribe: selectedSource= ', this.selectedSource);

    //     console.log(params['id']); // <--- This was never working for us to get the url 'id',
                                      //      so we get it by doing the below instead.
    //
    //   });

  }

  ngAfterViewChecked() {

    this.url = window.location.toString().split('/');
    this.selectedSource = this.url[this.url.length - 1];
    this.selectedView = this.url[this.url.length - 2];

    $('#source-select option[value="' + this.selectedSource + '"]').attr('selected', 'selected');
    $('#view-select option[value="' + this.selectedView + '"]').attr('selected', 'selected');

  }

  ngOnDestroy() {

    // this.sub.unsubscribe();

  }


}
