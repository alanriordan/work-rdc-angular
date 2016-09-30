import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GroundWaterComponent} from './groundwater.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports : [CommonModule,FormsModule,NgbModule],
    declarations :[GroundWaterComponent],
    exports :[GroundWaterComponent]
})
export class GroundWaterModule{

}