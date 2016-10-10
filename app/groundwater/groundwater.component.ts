import {Component, Output, OnInit, OnDestroy, AfterViewInit, ViewChildren, ElementRef,QueryList} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BaseModel} from '../common/base-model';
import {InspectionDetailsService} from '../common/inspection-details.service';
import {InspectionDetails, SmrStatus} from '../common/inspection-details';
import {getSmrCodeFromRoute} from '../common/smr-codes';
import {LocalStorageService} from '../service/localstorage.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {SmrCode} from '../common/smr-codes';
import {TotalWeightingComponent} from '../common/total-weighting.component';


@Component({
    templateUrl: 'app/groundwater/groundwater.component.html'
})
export class GroundWaterComponent implements OnInit, AfterViewInit{

    requiredField = "This field is required";    
    sub: Subscription;
    routepath: string;
    selectedInstance: number;
    selectedInspection: InspectionDetails;
    groundWaterForm:FormGroup;
    totalHeaders:string[] = ['Group1'];
    localStorageKey:string = String(SmrCode.GAEC3);


    sec1Total:number = 0;
    weightingTotals:Map<string,number>;
    

    constructor(fb:FormBuilder,private router: Router, private route: ActivatedRoute,
        private localStorageService: LocalStorageService, private inspectionDetailsService:InspectionDetailsService) { 
            this.groundWaterForm = fb.group({
                'inspDate':['',Validators.required],
                'reasonNotCompleted':[''],
                'forceMajeureInd':[''],
                'gaec3Q1Answer':[''],
                'gaec3Q1LPISNum':[''],
                'gaec3Q1Transgression':[''],
                'gaec3Q2Answer':[''],
                'gaec3Q2LPISNum':[''],
                'gaec3Q2Transgression':[''],
                'gaec3Q3Answer':[''],
                'gaec3Q3LPISNum':[''],
                'gaec3Q3Transgression':[''],
                'gaec3Q4Answer':[''],
                'gaec3Q4LPISNum':[''],
                'gaec3Q4Transgression':['']

            });
            this.weightingTotals =  new Map<string,number>();
        }

     ngOnInit() {
        this.sub = this.route.parent.url.subscribe(params => {
            this.selectedInstance = +params[1].path;
        })              
    }

    ngAfterViewInit(): void {
        let savedData = this.localStorageService.getObjectData(String(SmrCode.GAEC3));
        if (savedData){
            Object.keys(savedData).forEach((key) => {
            if (this.groundWaterForm.controls[key]){
                 this.groundWaterForm.controls[key].setValue(savedData[key]);
            }           
          });           
        }   
        this.handleWeightingChange();
                  
    }


    setRequiredFields(checkControl:FormControl, requiredControls:FormControl[]){
        if(checkControl.value != "" ){
            requiredControls.forEach(control => {
                control.setValidators(Validators.required);
                control.updateValueAndValidity();
            })
        } else {
            requiredControls.forEach(control => {
                control.setValidators(null);
                control.updateValueAndValidity();
            })
        }
    }


    handleWeightingChange():void{
         this.groundWaterForm.controls['gaec3Q1Transgression'].valueChanges.subscribe((value)=>{
            this.calculateSec1Total()                   
        }); 
         this.groundWaterForm.controls['gaec3Q2Transgression'].valueChanges.subscribe((value)=>{
            this.calculateSec1Total()                   
        }); 
         this.groundWaterForm.controls['gaec3Q3Transgression'].valueChanges.subscribe((value)=>{
            this.calculateSec1Total()                   
        }); 
         this.groundWaterForm.controls['gaec3Q4Transgression'].valueChanges.subscribe((value)=>{
            this.calculateSec1Total()                   
        });  
    }

    calculateSec1Total():number{        
        this.sec1Total = 0;
        this.sec1Total += +this.groundWaterForm.controls['gaec3Q1Transgression'].value;
        this.sec1Total += +this.groundWaterForm.controls['gaec3Q2Transgression'].value;
        this.sec1Total += +this.groundWaterForm.controls['gaec3Q3Transgression'].value;
        this.sec1Total += +this.groundWaterForm.controls['gaec3Q4Transgression'].value; 
        this.weightingTotals.set('sec1Total',this.sec1Total); 
        this.weightingTotals = new Map(this.weightingTotals);
        return this.sec1Total;    
    }


    back(): void {
        window.history.back();
    }

    saveForm(): void {       
        let details = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);   
        this.inspectionDetailsService.updateStatus("agr0776", SmrCode.GAEC3, SmrStatus.saved , details);      
        this.localStorageService.saveObjectData(String(SmrCode.GAEC3),this.groundWaterForm.value);  
    }

    finishForm(): void {
       let details = this.inspectionDetailsService.getSelectedInspection("agr0776", this.selectedInstance);   
       this.inspectionDetailsService.updateStatus("agr0776", SmrCode.GAEC3, SmrStatus.finished , details);
    }

}