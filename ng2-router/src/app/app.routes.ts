import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard';
import { Page1Component } from './page1';
import { Page2Component } from './page2';


import { Page1SourceComponent } from './page1/page1-source';
import { Page1ViewComponent } from './page1/page1-view';
import { Page2SourceComponent } from './page2/page2-source';
import { Page2ViewComponent } from './page2/page2-view';

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
    path: 'page1',
    component: Page1Component,
    children: [
      {
        path: ''
      },
      {
        path: 'source',
        component: Page1SourceComponent
      },
      {
        path: 'view',
        component: Page1ViewComponent
      }
    ]
  },
  {
    path: 'page2',
    component: Page2Component,
    children: [
      {
        path: ''
      },
      {
        path: 'source',
        component: Page2SourceComponent
      },
      {
        path: 'view',
        component: Page2ViewComponent
      }
    ]
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
