import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {CatalogService} from '../data/catalog.service';
import {Source} from '../data/source';
import { SourceDetailComponent } from '../source/source-detail.component';


@Component({
  moduleId: module.id,
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CatalogService]
})
export class SelectComponent {

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
