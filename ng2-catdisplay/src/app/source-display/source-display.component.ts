import { Input, Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';


@Component({
  moduleId: module.id,
  selector: 'app-source-display',
  providers: [CatalogService],
  templateUrl: 'source-display.component.html',
  styleUrls: ['source-display.component.css']
})
export class SourceDisplayComponent implements OnInit {
  @Input() active_source_id: number;
  sources: any;

  constructor(catalogService: CatalogService) {
      this.active_source_id = 1;
      this.sources = catalogService.getCatalog();
  }
  
  ngOnInit() {
    //   active_source_id = 0;
  }



}
