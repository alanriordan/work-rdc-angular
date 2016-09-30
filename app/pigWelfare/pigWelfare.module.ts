import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PigWelfareComponent} from './pigWelfare.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[PigWelfareComponent],
    exports :[PigWelfareComponent]
})
export class PigWelfareModule{

}