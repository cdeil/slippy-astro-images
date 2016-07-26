import { provideRouter, RouterConfig }  from '@angular/router';

import {SourceComponent} from './source';
import {ViewComponent} from './view';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/source',
    pathMatch: 'full'
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
