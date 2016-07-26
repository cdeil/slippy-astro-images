import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'view',
  templateUrl: 'view.component.html',
  styleUrls: ['view.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
