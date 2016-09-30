import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SoilErosionComponent} from './soilErosion.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[SoilErosionComponent],
    exports :[SoilErosionComponent]
})
export class SoilErosionModule{

}