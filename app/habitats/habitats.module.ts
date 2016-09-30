import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HabitatsComponent} from './habitats.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[HabitatsComponent],
    exports :[HabitatsComponent]
})
export class HabitatsModule{

}