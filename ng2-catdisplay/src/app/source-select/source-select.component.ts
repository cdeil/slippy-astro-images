import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { SourceDisplayComponent } from '../source-display';

@Component({
  moduleId: module.id,
  selector: 'app-source-select',
  templateUrl: 'source-select.component.html',
  styleUrls: ['source-select.component.css'],
  directives: [SourceDisplayComponent],
  providers: [CatalogService]
})
export class SourceSelectComponent implements OnInit {
  sources: any;
  source_id: number;

  constructor(private catalogService: CatalogService) {
      this.sources = this.catalogService.getCatalog();
      this.source_id = 0;
  }

  ngOnInit() {
  }

  onChange(newValue) {
      this.source_id = newValue;
      console.log('Changed to source_id = ', this.source_id);
  }

}
