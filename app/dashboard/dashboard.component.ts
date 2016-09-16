import {Component, OnInit, OnDestroy} from '@angular/core';
import {InspectionDetails} from '../common/inspection-details';
import {AfitService} from '../service/afit.service';
import {Router} from '@angular/router';

@Component({   
    templateUrl : 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy{

    

    inspectionDetails : InspectionDetails[];

    constructor(private afitService:AfitService, private router:Router){};

    ngOnInit():void{
        this.afitService.getInspectionDetails().then(inspectionDetails => 
        this.inspectionDetails = inspectionDetails);
    }

    ngOnDestroy():void{
       
    }

    selectInsepction(inspection:InspectionDetails):void{
        this.router.navigate(['container', inspection.inspectionInstanceNumber, 'summary']);
    }

}