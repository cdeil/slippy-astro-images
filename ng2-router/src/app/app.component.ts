import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Page1Component } from './page1';
import { Page2Component } from './page2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
