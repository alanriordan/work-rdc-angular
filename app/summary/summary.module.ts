import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryComponent} from './summary.component';
import {FormsModule} from '@angular/forms';
import {SummaryService} from './summary.service';
import {RouterModule} from '@angular/router';


@NgModule({
    imports : [CommonModule, FormsModule, RouterModule],
    declarations : [SummaryComponent],   
    exports:[SummaryComponent],
    providers:[SummaryService]
})
export class SummaryModule{

}