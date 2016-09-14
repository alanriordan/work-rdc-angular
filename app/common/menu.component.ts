import {Component, Input, OnInit} from '@angular/core';
import {SmrDetails, SmrCodes} from '../common/smr-codes';
import {Router} from '@angular/router';


@Component({
    selector :'rdc-menu',
    templateUrl : 'app/common/menu.component.html'
})
export class MenuComponent implements OnInit{

    @Input()
    smrDetails:SmrDetails[];

    smrActivated: number;
    @Input()
    dashboardSelected:boolean = true;

    constructor(private router:Router){};

    ngOnInit():void{
        this.smrActivated = -1;        
    }

    
    isBreadcrumbActive(smrCode:number):boolean{
       return smrCode == this.smrActivated;
    }

    goToSmr(smrCode:number):void{        
        this.smrActivated = smrCode;
        this.dashboardSelected = this.smrActivated == -1;
        var smrDetail = this.getSmrDetailsFromCode(smrCode);
        const url = `${smrDetail.route}`;
        console.log(url);
        this.router.navigate([url]);
    }


    getSmrDetailsFromCode(code:number):SmrDetails{
        return SmrCodes.filter(smrCode => smrCode.code == code)[0];
    }
}