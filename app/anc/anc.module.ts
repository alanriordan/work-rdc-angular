import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AncComponent} from './anc.component';

@NgModule({
    imports : [CommonModule,FormsModule],
    declarations :[AncComponent],
    exports :[AncComponent]
})
export class AncModule{

}