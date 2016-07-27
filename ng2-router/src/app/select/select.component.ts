import { Component, OnInit } from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router';

import {SourceComponent} from '../source';
import {ViewComponent} from '../view';

@Component({
  moduleId: module.id,
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
