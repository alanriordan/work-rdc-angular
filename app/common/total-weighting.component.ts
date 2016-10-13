import {Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, AbstractControl} from '@angular/forms';
import {LocalStorageService} from '../service/localstorage.service';
import {Subscription} from 'rxjs';

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
export class TotalWeightingComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

    @Input()
    headers:string[]
    
    @Input()
    localStorageKey:string;

    @Input()
    weightingTotals:Map<string,number>;

    @Input()
    form:FormGroup;

    sub: Subscription[] = [];

    constructor(fb:FormBuilder,private localStorageService:LocalStorageService){}

    ngOnChanges(changes:any):void{
        let pillarValue = 0;
         changes.weightingTotals.currentValue.forEach((value:any,key:any)=>{           
            this.form.controls[key].setValue(value);        
            pillarValue += value;    
        });        
    }  

    ngOnDestroy(){
         this.sub.forEach(sub=>{
            sub.unsubscribe();
        })
    } 

   

    ngOnInit():void{       
        this.createFormControl();
        this.calculatePillar();
        this.calculateExtent();
        this.calculateSeverity();
        this.calculatePermanence();
    }


     calculatePillar(){
        let pillarKeys = Object.keys(this.form.controls).filter(key => {
            return key.startsWith("sec") && key.endsWith("Total");
        });
        pillarKeys.forEach(key => {
            this.sub.push(this.form.controls[key].valueChanges.subscribe(()=>{               
                this.calculatePillarTotal(pillarKeys);
            }))
        })
    }

    calculatePillarTotal(permanenceKeys:string[]):void{
        let total = 0;
        permanenceKeys.forEach(key => {
            if(this.form.controls[key].value){
                total+= this.form.controls[key].value;
            }
        })
        this.form.controls['pillarTotal'].setValue(total);
        this.calculateTotals();
    }


    calculatePermanence(){
        let permanenceKeys = Object.keys(this.form.controls).filter(key => {
            return key.endsWith("PermananceInd");
        });
        permanenceKeys.forEach(key => {
            this.sub.push(this.form.controls[key].valueChanges.subscribe(()=>{               
                this.calculatePermanenceTotal(permanenceKeys);
            }))
        })
    }

    calculatePermanenceTotal(permanenceKeys:string[]):void{
        let total = 0;
        permanenceKeys.forEach(key => {
            if(this.form.controls[key].value){
                total+= 50;
            }
        })
        this.form.controls['permanenceTotal'].setValue(total);
        this.calculateTotals();
    }

    calculateSeverity(){
        let severityKeys = Object.keys(this.form.controls).filter(key => {
            return key.endsWith("SeverityInd");
        });
        severityKeys.forEach(key => {
            this.sub.push(this.form.controls[key].valueChanges.subscribe(()=>{               
                this.calculateSeverityTotal(severityKeys);
            }))
        })
    }

    calculateSeverityTotal(severityKeys:string[]):void{
        let total = 0;
        severityKeys.forEach(key => {
            if(this.form.controls[key].value){
                total+= 20;
            }
        })
        this.form.controls['severityTotal'].setValue(total);
        this.calculateTotals();
    }

    calculateExtent(){
        let extentKeys = Object.keys(this.form.controls).filter(key => {
            return key.endsWith("ExtentInd");
        });
        extentKeys.forEach(key => {
            this.sub.push(this.form.controls[key].valueChanges.subscribe(()=>{               
                this.calculateExtentTotal(extentKeys);
            }))
        })
    }

    calculateExtentTotal(extentKeys:string[]):void{
        let total = 0;
        extentKeys.forEach(key => {
            if(this.form.controls[key].value){
                total+= 20;
            }
        })
        this.form.controls['extentTotal'].setValue(total);
        this.calculateTotals();
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