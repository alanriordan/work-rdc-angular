import {Component, Output, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BaseModel} from '../common/base-model';


@Component({    
    templateUrl: 'app/nitrates/nitrates.component.html'
})
export class NitratesComponent implements OnInit, OnDestroy, AfterViewInit {

    requiredField = "This field is required";
    model:BaseModel = new BaseModel();
    smrFinished:boolean = false;
    smrSaved:boolean = false;
    sub:Subscription;
    selectedInstance:number;
    constructor( private router: Router,private route: ActivatedRoute) {}

    ngAfterViewInit():void{
        this.model = JSON.parse(localStorage.getItem(this.selectedInstance+""));
    }

    ngOnInit() {
    
    this.sub = this.route.parent.url.subscribe(params=>{
        this.selectedInstance = +params[1].path;
    })
    this.model.agr="agr0776";
    this.model.inspectionInstanceNumber=this.selectedInstance;
    
    
    console.log("NitratesId " + this.model);
    
     
  }

  saveForm():void{     
      this.model.smrStatus = "SAVED";
       console.log("Nitrates Data "+ this.model);
       localStorage.setItem(this.model.inspectionInstanceNumber+"", JSON.stringify(this.model));
  }

  finishForm():void{      
      this.model.smrStatus = "FINISHED";
      console.log("Finished Inspection " + this.model);
      localStorage.setItem(this.model.inspectionInstanceNumber+"", JSON.stringify(this.model));
  }

  ngOnDestroy() {
   this.sub.unsubscribe();
  }

   

}