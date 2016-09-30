import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SomComponent} from './som.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[SomComponent],
    exports :[SomComponent]
})
export class SomModule{

}