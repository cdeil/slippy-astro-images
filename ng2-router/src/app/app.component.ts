import { Component, OnInit, OnDestroy, DoCheck, AfterViewChecked } from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
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
  // public catalog;
  public selectedSource;
  public selectedView;
  public routerLink;
  private sub: any;

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
    this.selectedView = "source";

    this.catalogService.getCatalog()
      .then(sources => this.sources = sources);

    this.sub = this.activatedRoute
      .params
      .subscribe(params => {
        this.selectedSource = +params['id'];
        console.log('in subscribe: selectedSource= ', this.selectedSource);

      });

    this.selectedSource = 0;  //TODO: We need this to be set to whatever the id of the url is. For some reason selectedSource returns 'null' in the console.log above...
    console.log('after subscribe: selectedSource= ', this.selectedSource);


  }

  ngAfterViewChecked() {

    $('option[value="' + this.selectedSource + '"]').attr('selected', 'selected');
    console.log($('option[value="' + this.selectedSource + '"]'));

  }

  ngOnDestroy() {

    this.sub.unsubscribe();

  }

  ngDoCheck() {
    // this.route(this.selectedSource);
  }


}
