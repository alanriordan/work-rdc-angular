import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AfitService} from './service/afit.service';
import {routing} from './app.routing';
import {SummaryComponent} from './summary/summary.component';
import {MenuComponent} from './common/menu.component';
import {ContainerComponent} from './container/container.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, routing, FormsModule ],
  declarations: [ AppComponent, DashboardComponent, SummaryComponent, MenuComponent, ContainerComponent ],
  bootstrap: [ AppComponent ],
  providers : [AfitService]
})
export class AppModule { }
