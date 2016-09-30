import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalfWelfareComponent} from './calfWelfare.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[CalfWelfareComponent],
    exports :[CalfWelfareComponent]
})
export class CalfWelfareModule{

}