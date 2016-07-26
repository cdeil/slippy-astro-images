import { provideRouter, RouterConfig }  from '@angular/router';
import { Page1Component } from './page1';
import { Page2Component } from './page2';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/page1',
    pathMatch: 'full'
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
