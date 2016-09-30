import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {WildBirdsComponent} from './wildbirds.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[WildBirdsComponent],
    exports :[WildBirdsComponent]
})
export class WildBirdsModule{

}