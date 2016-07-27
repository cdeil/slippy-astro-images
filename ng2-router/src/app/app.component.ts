import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
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
export class AppComponent {

  public sources: Source[];
  public catalog;
  public selectedSource;
  public selectedView;

  getCatalog() {
    this.catalog = this.catalogService.getCatalog();
  }

  onSourceChange(value) {
    this.selectedSource = value;
    console.log("onSourceChange: ", this.selectedSource);
  }

  onViewChange(value) {
    this.selectedView = value;
        console.log("onViewChange: ", this.selectedView);
  }

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getCatalog();
    this.selectedSource = 0;
    this.selectedView = "text";
  }


}
