import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent }      from './summary/summary.component';
import { ContainerComponent }      from './container/container.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},  
  {path: 'container/:id', component: ContainerComponent},
  {path: '',redirectTo: 'dashboard',pathMatch: 'full'}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);