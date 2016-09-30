import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FoodComponent} from './food.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[FoodComponent],
    exports :[FoodComponent]
})
export class FoodModule{

}