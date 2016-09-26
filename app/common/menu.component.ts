import {Component, Input, OnInit} from '@angular/core';
import {SmrDetails, SmrCodes} from '../common/smr-codes';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector :'rdc-menu',
    templateUrl : 'app/common/menu.component.html'
})
export class MenuComponent implements OnInit{

    @Input()
    smrDetails:SmrDetails[];

    @Input()
    instanceNum:number;
   
    smrActivated: number;    

    constructor(private router:Router, private activatedRoute:ActivatedRoute){};

    ngOnInit():void{
        this.smrActivated = -1;      
        console.log(this.smrDetails);  
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