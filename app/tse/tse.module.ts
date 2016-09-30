import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TseComponent} from './tse.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[TseComponent],
    exports :[TseComponent]
})
export class TseModule{

}