import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard';

import {SourceComponent} from './source';
import {ViewComponent} from './view';
import {Source1Component} from './data/source1';
import {Source2Component} from './data/source2';


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
    component: SourceComponent,
    children: [
      {
        path: ''
      },
      {
        path: 'source1',
        component: Source1Component
      },
      {
        path: 'source2',
        component: Source2Component
      }
    ]
  },
  {
    path: 'view',
    component: ViewComponent,
    children: [
      {
        path: ''
      },
      {
        path: 'source1',
        component: Source1Component
      },
      {
        path: 'source2',
        component: Source2Component
      }
    ]
  }
];


export const appRouterProviders = [
  provideRouter(routes)
];
