import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  moduleId: module.id,
  selector: 'app-source-select',
  templateUrl: 'source-select.component.html',
  styleUrls: ['source-select.component.css'],
  providers: [CatalogService]
})
export class SourceSelectComponent implements OnInit {
  sources: any;

  constructor(catalogService: CatalogService) {   
      this.sources = catalogService.getCatalog();
  }

  ngOnInit() {      
  }

}
