import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'source',
  templateUrl: 'source.component.html',
  styleUrls: ['source.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SourceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
