import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from './dashboard';
import { Page1Component } from './page1';
import { Page2Component } from './page2';

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
    component: Page1Component
},
  {
    path: 'page2',
    component: Page2Component
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
