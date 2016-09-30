import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BovineComponent} from './bovine.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[BovineComponent],
    exports :[BovineComponent]
})
export class BovineModule{

}