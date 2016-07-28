import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {SourceComponent} from './source';
import {ViewComponent} from './view';
import {CatalogService} from './data/catalog.service';
import {Source} from './data/source';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CatalogService]
})
export class AppComponent implements OnInit, OnDestroy, DoCheck {

  public sources: Source[];
  // public catalog;
  public selectedSource;
  public selectedView;
  public routerLink;
  private sub: any;

  // getCatalog() {
  //   this.catalog = this.catalogService.getCatalog();
  // }

  onSourceChange(value) {
    this.selectedSource = value;

    this.router.navigate(['/source', value]);

    console.log("onSourceChange: ", this.selectedSource);
  }

  onViewChange(value) {
    this.selectedView = value;

    this.router.navigate(["/", value]);

    // this.routerLink = "/", this.selectedView;

    console.log("onViewChange: ", this.selectedView);
  }

  // route() {
  //   return this.routerLink;
  // }

  constructor(
    private catalogService: CatalogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.getCatalog();
    this.selectedSource = 0;
    this.selectedView = "text";
    this.routerLink = '/';

    this.sub = this.activatedRoute
      .params
      .subscribe(params => {
        this.selectedSource = +params['id'];
        this.catalogService.getCatalog()
          .then(sources => this.sources = sources);
      });

  }

  ngOnDestroy() {

    this.sub.unsubscribe();

  }

  ngDoCheck() {
    // this.route(this.selectedSource);
  }


}
