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
  // {
  //   path: 'source',
  //   component: SourceComponent
  // },
  // {
  //   path: 'view',
  //   component: ViewComponent
  // },
  {
    path: 'select',
    component: SelectComponent,
    children: [
      {
        path: ''
      },
      {
        path: 'source',
        component: SourceComponent
      },
      {
        path: 'view',
        component: ViewComponent
      }
    ]
  }
];


export const appRouterProviders = [
  provideRouter(routes)
];
