import { Component, OnInit } from '@angular/core';
import { Source } from '../data/source';
import { SourceDetailComponent } from './source-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-source',
  templateUrl: 'source.component.html',
  styleUrls: ['source.component.css'],
  directives: [SourceDetailComponent]
})
export class SourceComponent implements OnInit {

  public catalog = CATALOG;
  public selectedSource;

  onChange(value) {
    this.selectedSource = value;
  }

  constructor() { }

  ngOnInit() {
    this.selectedSource = 0;
  }

}

const CATALOG: Source[] = [
  {id: 0, name: '2FHL J0008.1+4709', ra: 2.0436999798, dec: 47.1641998291},
  {id: 1, name: '2FHL J0009.3+5031', ra: 2.3434998989, dec: 50.5217018127},
  {id: 2, name: '2FHL J0018.5+2947', ra: 4.6354999542, dec: 29.7879009247}
];
