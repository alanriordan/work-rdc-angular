import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SmrCodes, SmrDetails} from '../common/smr-codes';
import {AfitService} from '../service/afit.service';
@Component({
    //selector : 'rdc-container',
    templateUrl : `app/container/container.component.html`
})
export class ContainerComponent implements OnInit, OnDestroy{

    private smrDetails:SmrDetails[] = SmrCodes;
    private activeSmrs:SmrDetails[] = [];
    
    private sub:any;
    private selectedInstance:number;
    private selectedHerd:string;

    constructor(private route:ActivatedRoute, private afitService:AfitService){};

     ngOnInit():void{
        this.sub = this.route.params.subscribe(params=>{
            let id = +params['id'];
            this.selectedInstance = id;
            this.getOutForListForInspection(this.selectedInstance);
            console.log(id);
        });        
    }

    ngOnDestroy():void{
        this.sub.unsubscribe();
    }

     getOutForListForInspection(instanceNum:number):SmrDetails[]{
        this.afitService.getInspectionDetails().then(details => {
            this.activeSmrs = (details.filter(detail => 
                detail.inspectionInstanceNumber === instanceNum)
                    .map(detail => {
                        this.selectedHerd = detail.herdNumber;
                        return  this.smrDetails.filter(smr => 
                            detail.outFor.includes(smr.code.toString())
                        )
                    })
                )[0];                
            console.log(this.activeSmrs);
        });
        return;
    }

    back():void{
        window.history.back();
    }

    saveForm():void{
        console.log(this.route.snapshot.children[0].component);
    }

    finishForm():void{

    }

}