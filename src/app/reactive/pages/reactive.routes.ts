import { Routes } from '@angular/router';
import { SwitchesPage } from './switches-page/switches-page';
import { BasicPage } from './basic-page/basic-page';
import { DynamicPage } from './dynamic-page/dynamic-page';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Basicos',
        component: BasicPage,
      },
      {
        path: 'dynamic',
        title: 'Dinamicos',
        component: DynamicPage,
      },
      {
        path: 'switches',
        title: 'Switches',
        component: SwitchesPage,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
