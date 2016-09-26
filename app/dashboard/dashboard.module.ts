import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {ProgressComponent} from '../common/progress.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports : [CommonModule, FormsModule],
    declarations : [DashboardComponent, ProgressComponent],   
    exports:[DashboardComponent]
})
export class DashboardModule{

}