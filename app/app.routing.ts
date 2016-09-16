import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent }      from './summary/summary.component';
import { ContainerComponent }      from './container/container.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import {NitratesComponent} from './nitrates/nitrates.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},  
  {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
  {path:'container/:id', component:ContainerComponent, children:[
      {path: 'summary', component: SummaryComponent},
      {path: 'nitrates', component: NitratesComponent}
  ]} 
  
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);