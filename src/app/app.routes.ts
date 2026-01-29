import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'admin', loadChildren: () => import('./dashboards/admin/admin/admin-module').then(m => m.AdminModule) },
  { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Pour tester
];

