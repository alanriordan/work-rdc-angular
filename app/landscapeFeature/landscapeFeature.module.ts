import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LandscapeFeatureComponent} from './landscapeFeature.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[LandscapeFeatureComponent],
    exports :[LandscapeFeatureComponent]
})
export class LandscapeFeatureModule{

}