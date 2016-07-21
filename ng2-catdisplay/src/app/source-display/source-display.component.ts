import { Component, OnInit } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'app-source-display',
  templateUrl: 'source-display.component.html',
  styleUrls: ['source-display.component.css']
})
export class SourceDisplayComponent implements OnInit {
  active_source_id: number;
  sources: any;

  constructor() {
      this.active_source_id = 1;
      this.sources = {
          0: {name: 'Source 0'},
          1: {name: 'Source 1'},
      }
  }
  
  ngOnInit() {
    //   active_source_id = 0;
  }



}
