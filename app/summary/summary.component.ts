import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SmrCodes, SmrDetails} from '../common/smr-codes';
import {AfitService} from '../service/afit.service';
import {BaseModel} from '../common/base-model';
import {Subscription} from 'rxjs';


@Component({
    templateUrl : 'app/summary/summary.component.html'
})
export class SummaryComponent implements OnInit{

    selectedInstance:number;
    data:BaseModel;
    smrStatus:string;
    sub:Subscription;
    constructor(private route:ActivatedRoute){};

  
 ngOnInit():void{
        this.sub = this.route.parent.url.subscribe(params=>{
        this.selectedInstance = +params[1].path;
    })       
    }

    ngAfterViewInit():void{
        this.data = JSON.parse(localStorage.getItem(this.selectedInstance+""));
        if(this.data){
            this.smrStatus = this.data.smrStatus;
        }
        
    }

}