import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'page2',
  templateUrl: 'page2.component.html',
  styleUrls: ['page2.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
