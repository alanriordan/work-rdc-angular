import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BdgpComponent} from './bdgp.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[BdgpComponent],
    exports :[BdgpComponent]
})
export class BdgpModule{

}