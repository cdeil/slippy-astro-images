import { Component, OnInit } from '@angular/core';
import { Source } from '../data/source';
import { SourceDetailComponent } from './source-detail.component';
import { CatalogService } from '../data/catalog.service';

@Component({
  moduleId: module.id,
  selector: 'app-source',
  templateUrl: 'source.component.html',
  styleUrls: ['source.component.css'],
  directives: [SourceDetailComponent],
  providers: [CatalogService]
})
export class SourceComponent implements OnInit {

  public sources: Source[];
  public catalog;

  getCatalog() {
    this.catalog = this.catalogService.getCatalog();
  }

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getCatalog();
  }

}
