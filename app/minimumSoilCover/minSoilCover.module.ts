import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MinSoilCoverComponent} from './minSoilCover.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[MinSoilCoverComponent],
    exports :[MinSoilCoverComponent]
})
export class MinSoilCoverModule{

}