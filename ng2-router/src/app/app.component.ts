import { Component, OnInit, OnDestroy, DoCheck, AfterViewChecked } from '@angular/core';
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
export class AppComponent implements OnInit, OnDestroy, DoCheck, AfterViewChecked {

  public sources: Source[];
  // public source: Source;

  // public catalog;
  public selectedSource;
  public selectedView;
  // private sub: any;
  // private sub2: any;
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

    console.log("sources: ", this.catalogService.getCatalog().then(sources => sources));

    // this.sub = this.activatedRoute
    //   .params
    //   .subscribe(params => {
    //     this.selectedSource = +params['id'];
    //     console.log('in subscribe: selectedSource= ', this.selectedSource);
    //     console.log(params['id']);
    //
    //   });

      this.url = window.location.toString().split('/');
      this.selectedSource = this.url[this.url.length - 1];
      this.selectedView = this.url[this.url.length - 2];

    // this.sub2 = this.router.events.subscribe((event) => {
    //   console.log(this.router.url);
    // });


    // this.sub2 = this.router.events
    //   // .filter(event => event instancecof NavigationEnd)
    //   .map(_ => this.router.routerState)
    //   .map(state => {
    //     let route = this.activatedRoute;
    //     while(state.firstChild(route)) {
    //       route = state.firstChild(route);
    //     }
    //     return route;
    //   })
    //   // .filter(route => route.outlet === PRIMARY_OUTLET)
    //   .mergeMap(route => route.data)
    //   .subscribe(data => {
    //     console.log(data['id'])
    //   });

  }

  ngAfterViewChecked() {

    $('#source-select option[value="' + this.selectedSource + '"]').attr('selected', 'selected');
    $('#view-select option[value="' + this.selectedView + '"]').attr('selected', 'selected');

  }

  ngOnDestroy() {

    // this.sub.unsubscribe();
    // this.sub2.unsubscribe();

  }

  ngDoCheck() {
    // this.route(this.selectedSource);
    }


}
