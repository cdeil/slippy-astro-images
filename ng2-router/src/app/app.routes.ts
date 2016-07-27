import { provideRouter, RouterConfig }  from '@angular/router';

import {SelectComponent} from './select';
import {SourceComponent} from './source';
import {ViewComponent} from './view';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/select',
    pathMatch: 'full'
  },
  {
    path: 'select',
    component: SelectComponent
  },
  {
    path: 'source',
    component: SourceComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
];


export const appRouterProviders = [
  provideRouter(routes)
];
