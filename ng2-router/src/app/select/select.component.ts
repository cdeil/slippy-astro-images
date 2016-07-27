import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SourceComponent} from '../source';
import {ViewComponent} from '../view';
import {CatalogService} from '../data/catalog.service';
import {Source} from '../data/source';


@Component({
  moduleId: module.id,
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [CatalogService]
})
export class SelectComponent implements OnInit {

  public sources: Source[];
  public catalog;
  public selectedSource;

  getCatalog() {
    this.catalog = this.catalogService.getCatalog();
  }

  onChange(value) {
    this.selectedSource = value;
  }

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getCatalog();
    this.selectedSource = 0;
  }

}
