import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SmrCodes, SmrDetails} from '../common/smr-codes';
import {AfitService} from '../service/afit.service';


@Component({
    templateUrl : 'app/summary/summary.component.html'
})
export class SummaryComponent implements OnInit{

    constructor(private route:ActivatedRoute){};

  
 ngOnInit():void{
        this.route.params.subscribe(params=>{
            let id = +params['id'];           
            console.log("Summary " + id);
        });        
    }

}