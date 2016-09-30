import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OvineComponent} from './ovine.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[OvineComponent],
    exports :[OvineComponent]
})
export class OvineModule{

}