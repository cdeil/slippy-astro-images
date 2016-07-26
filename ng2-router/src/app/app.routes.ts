import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard';

import {SourceComponent} from './source';
import {ViewComponent} from './view';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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
