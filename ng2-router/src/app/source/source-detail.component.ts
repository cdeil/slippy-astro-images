import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../data/source';

@Component({
  moduleId: module.id,
  selector: 'source-detail',
  templateUrl: 'source-detail.component.html',
  styleUrls: ['source-detail.component.css']
})
export class SourceDetailComponent implements OnInit {

  // public selectedSource;
  //
  // onChange(value) {
  //   this.selectedSource = value;
  // }
  //
  // @Input()
  // catalog;
  //
  // constructor() { }

  ngOnInit() {
    // this.selectedSource = 0;
  }

}
