import {Component, Output, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BaseModel} from '../common/base-model';
import {InspectionDetailsService} from '../common/inspection-details.service';
import {InspectionDetails, SmrStatus} from '../common/inspection-details';
import {getSmrCodeFromRoute} from '../common/smr-codes';
import {LocalStorageService} from '../service/localstorage.service';


@Component({
    templateUrl: 'app/nitrates/nitrates.component.html'
})
export class NitratesComponent implements OnInit, OnDestroy, AfterViewInit {

    requiredField = "This field is required";
    model: BaseModel = new BaseModel();
    sub: Subscription;
    routepath: string;
    selectedInstance: number;
    selectedInspection: InspectionDetails;

    constructor(private router: Router, private route: ActivatedRoute,
        private localStorageService: LocalStorageService, private inspectionDetailsService:InspectionDetailsService) { }

    ngAfterViewInit(): void {
        let savedData = this.localStorageService.getObjectData(String(this.selectedInstance));
        if (savedData){
            this.model = savedData;
        }        
    }

    ngOnInit() {
        this.sub = this.route.parent.url.subscribe(params => {
            this.selectedInstance = +params[1].path;
        })
        this.model.inspectionInstanceNumber = this.selectedInstance;        
    }

    back(): void {
        window.history.back();
    }

    saveForm(): void {       
        let details = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);   
        this.inspectionDetailsService.updateStatus("agr0776", 13, SmrStatus.saved , details);        
    }

    finishForm(): void {
       let details = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);   
       this.inspectionDetailsService.updateStatus("agr0776", 13, SmrStatus.finished , details);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }



}