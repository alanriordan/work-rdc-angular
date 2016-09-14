import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SmrCodes, SmrDetails} from '../common/smr-codes';
import {AfitService} from '../service/afit.service';
@Component({
    selector : 'rdc-container',
    template : `<rdc-menu [smrDetails]="activeSmrs" [dashboardSelected]="false"></rdc-menu>
                <router-outlet></router-outlet>`
})
export class ContainerComponent implements OnInit{

    private smrDetails:SmrDetails[] = SmrCodes;
    private activeSmrs:SmrDetails[] = [];
    private atDashboard:boolean = false;

    private selectedInstance:number;

    constructor(private route:ActivatedRoute, private afitService:AfitService){};

     ngOnInit():void{
        this.route.params.forEach((params:Params)=>{
            let id = +params['id'];
            this.selectedInstance = id;
            this.getOutForListForInspection(this.selectedInstance);
            console.log(id);
        });
        this.atDashboard = true;
    }

     getOutForListForInspection(instanceNum:number):SmrDetails[]{
        this.afitService.getInspectionDetails().then(details => {
            this.activeSmrs = (details.filter(detail => 
                detail.inspectionInstanceNumber === instanceNum)
                    .map(detail => {
                        return  this.smrDetails.filter(smr => 
                            detail.outFor.includes(smr.code.toString())
                        )
                    })
                )[0];                
            console.log(this.activeSmrs);
        });
        return;
    }

    goToDashboard():void{
        window.history.back();
    }

}