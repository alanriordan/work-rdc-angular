import {Component, Input, OnInit, OnChanges, AfterViewInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, AbstractControl} from '@angular/forms';
import {LocalStorageService} from '../service/localstorage.service';

@Component({
    selector:'total-weighting',
    templateUrl:'app/common/total-weighting.component.html',
    styles:[
        `.label{
            background:rgba(0,0,0,0);
            border:none;
        }`
    ]
})
export class TotalWeightingComponent implements OnInit, OnChanges, AfterViewInit{

    @Input()
    headers:string[]
    
    @Input()
    localStorageKey:string;

    @Input()
    weightingTotals:Map<string,number>;

    @Input()
    form:FormGroup;

    constructor(fb:FormBuilder,private localStorageService:LocalStorageService){
        /*this.form = fb.group({
            'inspInspectionResult':[''],
            'pillartotal':[''],
            'extenttotal':[''],
            'severitytotal':[''],
            'permanencetotal':[''],
            'inspTotalWeighting':['']
        });*/
        
      
    }

    ngOnChanges(changes:any):void{
         let pillarValue = 0;
         changes.weightingTotals.currentValue.forEach((value:any,key:any)=>{           
            this.form.controls[key].setValue(value);        
            pillarValue += value;    
        });
        if (this.form.controls['pillarTotal']){
            this.form.controls['pillarTotal'].setValue(pillarValue);
             this.calculateTotals();
        }
                  
        
    }    

    ngOnInit():void{       
        this.createFormControl();
    }

    calculateTotals():void{
        let totalValue = 0 + this.form.controls['pillarTotal'].value + 
        this.form.controls['extentTotal'].value + 
        this.form.controls['severityTotal'].value + 
        this.form.controls['permanenceTotal'].value;
        this.form.controls['inspTotalWeighting'].setValue(totalValue);        
        this.calculateInspectionResult(this.form.controls['inspTotalWeighting'].value);
    }


    calculateInspectionResult(weighting:number):void {
        let result = '5%';
        if (weighting <= 46) result =  '3%';
        if (weighting <= 26) result =  '1%';
        if(weighting <= 6)result =  'CLT';     
        if(weighting==0) result =  'CL';       
        this.form.controls['inspInspectionResult'].setValue(result);
        
        
    }

    

    ngAfterViewInit(): void {
      let savedData = this.localStorageService.getObjectData(this.localStorageKey);
        if (savedData){
            Object.keys(savedData).forEach((key) => {
            if (this.form.controls[key]){
                 this.form.controls[key].setValue(savedData[key]);
            }           
          });           
        }
        
    }


    createFormControl():void{   
        this.form.addControl('pillarTotal', new FormControl(''));
        this.form.addControl('extentTotal', new FormControl(''));
        this.form.addControl('severityTotal', new FormControl(''));
        this.form.addControl('permanenceTotal', new FormControl(''));
        this.form.addControl('inspTotalWeighting', new FormControl('')); 
        this.form.addControl('inspInspectionResult', new FormControl(''));

        this.headers.forEach((header, i)=>{
            let index=i+1;
            this.form.addControl(`sec${index}Total`, new FormControl(''));
            this.form.addControl(`sec${index}ExtentInd`, new FormControl(''));
            this.form.addControl(`sec${index}SeverityInd`, new FormControl(''));
            this.form.addControl(`sec${index}PermananceInd`, new FormControl(''));
            this.form.addControl(`sec${index}IntentCode`, new FormControl(''));
            this.form.addControl(`sec${index}PermananceInd`, new FormControl(''));            
        });
    }

    

}