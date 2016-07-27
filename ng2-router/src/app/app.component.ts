import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
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
  public selectedSource: number;
  public selectedView: string;

  getCatalog() {
    this.catalog = this.catalogService.getCatalog();
  }

  onSourceSelectChange(value) {
    this.selectedSource = value;
    console.log('AppComponent: selectedSource: ', this.selectedSource)
  }

  onViewSelectChange(value) {
    this.selectedView = value;
    console.log('AppComponent: selectedView: ', this.selectedView)
    // TODO: issue route navigation command here!
  }


  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getCatalog();
    this.selectedSource = 0;
  }

}
