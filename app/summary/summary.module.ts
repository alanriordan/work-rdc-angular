import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryComponent} from './summary.component';
import {FormsModule} from '@angular/forms';
import {SummaryService} from './summary.service';


@NgModule({
    imports : [CommonModule, FormsModule],
    declarations : [SummaryComponent],   
    exports:[SummaryComponent],
    providers:[SummaryService]
})
export class SummaryModule{

}