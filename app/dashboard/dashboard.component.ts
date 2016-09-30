import {Component, OnInit, OnDestroy} from '@angular/core';
import {InspectionDetails, SmrStatus} from '../common/inspection-details';
import {AfitService} from '../service/afit.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../service/localstorage.service';

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {



    inspectionDetails: InspectionDetails[];
    //numOfSmr:number;

    constructor(private afitService: AfitService, private router: Router, private localStorageService: LocalStorageService) { };

    ngOnInit(): void {
        var currentInspections = this.localStorageService.getObjectData("agr0776");
        if (!currentInspections) {
                this.afitService.getInspectionDetails().then(inspectionDetails => {
                this.inspectionDetails = inspectionDetails;
                this.localStorageService.saveObjectData("agr0776", this.inspectionDetails);
                 }
            );
        } else{
            this.inspectionDetails = currentInspections;            
        }

    }

    getCompletedSmr(inspection:InspectionDetails):number{
        let count = 0;
        inspection.status.forEach(inspectionStatus => {
            if (inspectionStatus.smrStatus == SmrStatus.finished){
                count++;
            }
        })
        return count;
    }

    getNumOfSmr(inspection:InspectionDetails):number{
       let number = (inspection.adHoc ? inspection.adHoc.length : 0 ) + 
       (inspection.outFor ? inspection.outFor.length : 0 );
       return number;
    }

    ngOnDestroy(): void {

    }

    selectInsepction(inspection: InspectionDetails): void {
        this.router.navigate(['container',inspection.inspectionInstanceNumber,'summary']);
    }

}