import { provideRouter, RouterConfig }  from '@angular/router';

// import {SelectComponent} from './select';
import {SourceComponent} from './source';
import {ViewComponent} from './view';

const routes: RouterConfig = [
  // {
  //   path: 'select',
  //   component: SelectComponent
  // },

  {
    path: 'source/:id',
    component: SourceComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: 'source',
    redirectTo: '/source/0',
    pathMatch: 'full'
  },
  {
    path: 'view',
    redirectTo: '/view/0',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo:'/source/0',
    pathMatch: 'full'
  },
];


export const appRouterProviders = [
  provideRouter(routes)
];
