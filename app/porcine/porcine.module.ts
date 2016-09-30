import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PorcineComponent} from './porcine.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[PorcineComponent],
    exports :[PorcineComponent]
})
export class PorcineModule{

}