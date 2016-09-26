import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent }  from './app.component';

import {DashboardModule} from './dashboard/dashboard.module';
import {AfitService} from './service/afit.service';
import {routing} from './app.routing';
import {MenuComponent} from './common/menu.component';
import {ContainerModule} from './container/container.module';
import {SummaryModule} from './summary/summary.module';
import {OnlineService} from './common/online-check.service';
import {LocalStorageService} from './service/localstorage.service';
import {NitratesModule} from './nitrates/nitrates.module';
import {InspectionDetailsService} from './common/inspection-details.service';


@NgModule({
  imports: [BrowserModule, HttpModule, routing, DashboardModule,
    SummaryModule, ContainerModule, NitratesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AfitService, OnlineService,LocalStorageService,InspectionDetailsService]
})
export class AppModule { }
