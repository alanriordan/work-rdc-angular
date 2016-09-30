import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SmrCodes, SmrDetails} from '../common/smr-codes';
import {AfitService} from '../service/afit.service';
import {BaseModel} from '../common/base-model';
import {Subscription} from 'rxjs';
import {InspectionDetails, InspectionStatus, SmrStatus} from '../common/inspection-details';
import {InspectionDetailsService} from '../common/inspection-details.service';
import {SummaryService} from './summary.service';

@Component({
    templateUrl: 'app/summary/summary.component.html'
})
export class SummaryComponent implements OnInit {

    selectedInstance: number;
    data: BaseModel;
    smrStatus: string;
    sub: Subscription;
    constructor(private route: ActivatedRoute, private inspectionDetailsService: InspectionDetailsService,
         private summaryService:SummaryService) { };
    adHocList: number[] = [];
    smrCodes: SmrDetails[] = SmrCodes;
    selectedInspection: InspectionDetails;


    ngOnInit(): void {
        this.sub = this.route.parent.url.subscribe(params => {
            this.selectedInstance = +params[1].path;
            this.selectedInspection = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);
        })
    }

    ngAfterViewInit(): void {
        this.data = JSON.parse(localStorage.getItem(this.selectedInstance + ""));
        if (this.data) {
            this.smrStatus = this.data.smrStatus;
        }

    }

    inspectionExists(smrCode: number): boolean {
        let exists = false;
        if (this.selectedInspection.adHoc) {
            exists = this.selectedInspection.adHoc.indexOf(smrCode) >= 0
                || this.selectedInspection.outFor.indexOf(smrCode) >= 0;
        }
        return exists;
    }

    adHocExists(smrCode: number): boolean {
        let exists = false;
        if (this.selectedInspection.adHoc) {
            exists = this.selectedInspection.adHoc.indexOf(smrCode) >= 0;
        }
        return exists;
    }

    getStatusText(smrCode:number){
        return SmrStatus[this.getStatus(smrCode)];
    }

    getStatus(smrCode: number): number {
        let status = 0;
        let inspectionStatus:InspectionStatus = this.selectedInspection.status.filter(inspectionStatus => {
            return inspectionStatus.smrCode == smrCode;
        })[0];
        if (inspectionStatus){
            status = inspectionStatus.smrStatus;
        }
        return status;        
    }

    isCaseFinished(smrCode:number){
        return this.getStatus(smrCode) == 2;
    }

    createAdHoc():void{
        let smrCodes = this.adHocList.map((value,smrCode) => {
            return smrCode;
        })
        this.selectedInspection = this.summaryService.createAdHoc("agr0776", smrCodes, this.selectedInstance);
        this.inspectionDetailsService.updateInspection("agr0776", this.selectedInspection, this.selectedInstance);
        this.adHocList = [];
    }

    removeAdHoc(smrCode:number):void{        
        this.selectedInspection = this.summaryService.removeAdHoc("agr0776", smrCode, this.selectedInstance);
        this.inspectionDetailsService.updateInspection("agr0776", this.selectedInspection, this.selectedInstance);
       
    }

}