import {Component, Output, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({    
    templateUrl: 'app/nitrates/nitrates.component.html'
})
export class NitratesComponent implements OnInit, OnDestroy{

    requiredField = "This field is required";
    model = {};
    sub:Subscription;
    selectedInstance:number;
    constructor( private router: Router,private route: ActivatedRoute) {}


    ngOnInit() {
    
    this.sub = this.route.parent.url.subscribe(params=>{
        this.selectedInstance = +params[1].path;
    })
    
    console.log("NitratesId " + this.selectedInstance);
    
     
  }

  saveForm():void{
      console.log("Nitrates Data "+ this.model);
  }

  ngOnDestroy() {
   this.sub.unsubscribe();
  }

   

}