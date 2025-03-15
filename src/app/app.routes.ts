import { Routes } from '@angular/router';
import { DashboardComponent } from './Layouts/dashboard/dashboard.component';
import { UserComponent } from './Layouts/user/user.component';
export const routes: Routes = [
  {
    path: '',

    component: UserComponent,
    loadChildren: () =>
      import('./Layouts/user/user.routes').then((m) => m.routes),
  },
  {
    path: 'dashboard',

    component: DashboardComponent,
    loadChildren: () =>
      import('./Layouts/dashboard/dashboard.routes').then((m) => m.routes),
  },

  
];
