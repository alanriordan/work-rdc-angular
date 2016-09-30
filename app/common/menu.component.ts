import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {SmrDetails, SmrCodes} from '../common/smr-codes';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {InspectionDetailsService} from '../common/inspection-details.service';
import {InspectionDetails, SmrStatus} from '../common/inspection-details';

@Component({
    selector :'rdc-menu',
    templateUrl : 'app/common/menu.component.html'
})
export class MenuComponent implements OnInit, OnDestroy{

    @Input()
    smrDetails:SmrDetails[];

    @Input()
    instanceNum:number;
   
    smrActivated: number;  
    instanceSub: Subscription; 
    inspectionSub:Subscription; 
    selectedInstance: number;
    selectedInspection : InspectionDetails;

    constructor(private router:Router, private activatedRoute:ActivatedRoute, private inspectionDetailsService:InspectionDetailsService){};

    ngOnInit():void{
        this.smrActivated = -1;      
        this.instanceSub = this.activatedRoute.url.subscribe(params => {
            if (params){
                this.selectedInstance = +params[1].path;
                this.selectedInspection = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);
            }            
        }) 

        this.inspectionSub =  this.inspectionDetailsService.inspectionUpdated$.subscribe(
            (details:InspectionDetails[]) => {
                this.selectedInspection = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);                          
            })
         
    }

    ngOnDestroy():void{
        this.instanceSub.unsubscribe();
        this.inspectionSub.unsubscribe();
    }


    getSmrStatus(smrCode:number):number{
         let statusCode = 0;
         let status = this.selectedInspection.status.filter(inspectionStatus => {
            return inspectionStatus.smrCode == smrCode;
        })[0];
        status ? statusCode = status.smrStatus : 0;
        return statusCode;
    }


    getSmrStatusStyle(smrCode:number):string{
        let status = this.getSmrStatus(smrCode);
        let color = "";
        if(status){              
            switch(status){
                case SmrStatus.saved : color = "yellow";break;
                case SmrStatus.finished : color = 'lightgreen';break;
                case SmrStatus.complete : color ='orange'; break;
            }
        }
        return color;

    }

    
    isBreadcrumbActive(inspectionPath:string):boolean{
         let activepath = "";
       if (this.activatedRoute.firstChild.snapshot){
           activepath = this.activatedRoute.firstChild.snapshot.url[0].path;
       }       
       return activepath == inspectionPath;
    }

    goToSmr(smrCode:number):void{        
        this.smrActivated = smrCode;       
        var smrDetail = this.getSmrDetailsFromCode(smrCode);   
        let route = smrDetail ? smrDetail.route : 'summary';      
        this.router.navigate(['container',this.instanceNum, route]);
    }


    getSmrDetailsFromCode(code:number):SmrDetails{
        return SmrCodes.filter(smrCode => smrCode.code == code)[0];
    }

    
}