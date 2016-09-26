import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NitratesComponent} from './nitrates.component';
import {AfitService} from '../service/afit.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports : [CommonModule,FormsModule,NgbModule],
    declarations : [NitratesComponent],
    exports:[NitratesComponent],
    providers:[AfitService]
})
export class NitratesModule{

}