import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PlantProtectionComponent} from './plantProtection.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[PlantProtectionComponent],
    exports :[PlantProtectionComponent]
})
export class PlantProtectionModule{

}