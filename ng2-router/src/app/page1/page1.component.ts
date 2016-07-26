import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'page1',
  templateUrl: 'page1.component.html',
  styleUrls: ['page1.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
