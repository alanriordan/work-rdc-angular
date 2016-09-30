import {Component, Output, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BaseModel} from '../common/base-model';
import {InspectionDetailsService} from '../common/inspection-details.service';
import {InspectionDetails, SmrStatus} from '../common/inspection-details';
import {getSmrCodeFromRoute} from '../common/smr-codes';
import {LocalStorageService} from '../service/localstorage.service';


@Component({
    templateUrl: 'app/groundwater/groundwater.component.html'
})
export class GroundWaterComponent implements OnInit{

    requiredField = "This field is required";    
    sub: Subscription;
    routepath: string;
    selectedInstance: number;
    selectedInspection: InspectionDetails;
    form:any;

    

    constructor(private router: Router, private route: ActivatedRoute,
        private localStorageService: LocalStorageService, private inspectionDetailsService:InspectionDetailsService) { }

     ngOnInit() {
        this.sub = this.route.parent.url.subscribe(params => {
            this.selectedInstance = +params[1].path;
        })              
    }


    back(): void {
        window.history.back();
    }

    saveForm(form:any): void {       
        let details = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);   
        this.inspectionDetailsService.updateStatus("agr0776", 33, SmrStatus.saved , details);      
        this.localStorageService.saveObjectData("33",form);  
    }

    finishForm(): void {
       let details = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);   
       this.inspectionDetailsService.updateStatus("agr0776", 33, SmrStatus.finished , details);
    }

}