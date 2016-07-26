import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SourceComponent } from './source';
import { ViewComponent } from './view';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {



}
