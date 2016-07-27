import { provideRouter, RouterConfig }  from '@angular/router';

import { AppComponent } from './app.component';
import { SelectComponent } from './select';
import {SourceDetailComponent} from './source/source-detail.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/select',
    pathMatch: 'full'
  },
  {
    path: 'select',
    component: SelectComponent,
  }
];


export const appRouterProviders = [
  provideRouter(routes)
];
