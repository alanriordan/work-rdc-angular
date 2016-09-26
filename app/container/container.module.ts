import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from '../common/menu.component';
import {routing} from '../app.routing';

@NgModule({
    imports : [CommonModule, FormsModule, routing],
    declarations : [ContainerComponent, MenuComponent],   
    exports:[ContainerComponent]
})
export class ContainerModule{

}