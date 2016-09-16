import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AfitService} from './service/afit.service';
import {routing} from './app.routing';
import {SummaryComponent} from './summary/summary.component';
import {NitratesComponent} from './nitrates/nitrates.component';
import {MenuComponent} from './common/menu.component';
import {ContainerComponent} from './container/container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OnlineService} from './common/online-check.service';

@NgModule({
  imports: [ BrowserModule, HttpModule, routing, FormsModule, NgbModule ],
  declarations: [ AppComponent, DashboardComponent, SummaryComponent, MenuComponent, ContainerComponent, NitratesComponent ],
  bootstrap: [ AppComponent ],
  providers : [AfitService, OnlineService]
})
export class AppModule { }
