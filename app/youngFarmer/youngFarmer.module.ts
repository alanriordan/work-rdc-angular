import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {YoungFarmerComponent} from './youngFarmer.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[YoungFarmerComponent],
    exports :[YoungFarmerComponent]
})
export class YoungFarmerModule{

}