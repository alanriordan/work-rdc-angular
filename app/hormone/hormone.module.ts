import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HormoneComponent} from './hormone.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[HormoneComponent],
    exports :[HormoneComponent]
})
export class HormoneModule{

}