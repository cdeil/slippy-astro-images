import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../data/source';
import {CatalogService} from '../data/catalog.service';

@Component({
  moduleId: module.id,
  selector: 'source-detail',
  templateUrl: 'source-detail.component.html',
  styleUrls: ['source-detail.component.css'],
  providers: [CatalogService]
})
export class SourceDetailComponent implements OnInit {

  public catalog;
  public selectedSource;

  onChange(value) {
    this.selectedSource = value;
  }

  constructor(private catalogService: CatalogService) {
      this.catalog = catalogService.getCatalog();      
  }

  ngOnInit() {
    this.selectedSource = 0;
  }

}
