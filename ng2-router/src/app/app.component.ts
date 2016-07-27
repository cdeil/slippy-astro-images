import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {CatalogService} from './data/catalog.service';
import {Source} from './data/source';
import { SourceDetailComponent } from './source/source-detail.component';
import { SelectComponent } from './select'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, SelectComponent],
})
export class AppComponent {
}
