import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {GroundWaterComponent} from './groundwater.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TotalWeightingComponent} from '../common/total-weighting.component';




@NgModule({
    imports : [CommonModule,FormsModule,NgbModule,ReactiveFormsModule],
    declarations :[GroundWaterComponent,TotalWeightingComponent],    
    exports :[GroundWaterComponent]
})
export class GroundWaterModule{

}