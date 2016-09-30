import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AnimalWelfareComponent} from './animalWelfare.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[AnimalWelfareComponent],
    exports :[AnimalWelfareComponent]
})
export class AnimalWelfareModule{

}