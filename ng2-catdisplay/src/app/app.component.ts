import { Component } from '@angular/core';
import { SourceSelectComponent } from './source-select';
import { SourceDisplayComponent } from './source-display';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [SourceSelectComponent, SourceDisplayComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
}
