import {Component, Output, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BaseModel} from '../common/base-model';
import {InspectionDetailsService} from '../common/inspection-details.service';
import {InspectionDetails, SmrStatus} from '../common/inspection-details';
import {getSmrCodeFromRoute} from '../common/smr-codes';
import {LocalStorageService} from '../service/localstorage.service';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {SmrCode} from '../common/smr-codes';
import {TotalWeightingComponent} from '../common/total-weighting.component';
import {RdcValidators} from '../common/validators';

@Component({
    templateUrl: 'app/groundwater/groundwater.component.html'
})
export class GroundWaterComponent implements OnInit, AfterViewInit, OnDestroy {

    requiredField = "This field is required";
    sub: Subscription[] = [];
    routepath: string;
    selectedInstance: number;
    selectedInspection: InspectionDetails;
    groundWaterForm: FormGroup;
    totalHeaders: string[] = ['Group1'];
    localStorageKey: string = String(SmrCode.GAEC3);
    user:string
    notes:AbstractControl;
    sec1Total: number = 0;
    weightingTotals: Map<string, number>;
    storageSaveKey:string;

    constructor(fb: FormBuilder, private router: Router, private route: ActivatedRoute,
        private localStorageService: LocalStorageService, private inspectionDetailsService: InspectionDetailsService) {
        this.groundWaterForm = fb.group({
            'inspDate': [new Date(), Validators.required],
            'reasonNotCompleted': [''],
            'forceMajeureInd': [''],
            'gaec3Q1Answer': ['', Validators.required],
            'gaec3Q1LPISNum': [''],
            'gaec3Q1Transgression': [''],
            'gaec3Q2Answer': ['', Validators.required],
            'gaec3Q2LPISNum': [''],
            'gaec3Q2Transgression': [''],
            'gaec3Q3Answer': ['', Validators.required],
            'gaec3Q3LPISNum': [''],
            'gaec3Q3Transgression': [''],
            'gaec3Q4Answer': ['', Validators.required],
            'gaec3Q4LPISNum': [''],
            'gaec3Q4Transgression': [''],
            'notes': ['']
        });
        this.notes = this.groundWaterForm.controls['notes'];
        this.weightingTotals = new Map<string, number>();       
    }

    ngOnInit() {
        this.sub.push(this.route.parent.url.subscribe(params => {
            this.selectedInstance = +params[1].path;
             this.user = this.localStorageService.getUser();
             this.storageSaveKey = `${this.user}_${this.selectedInstance}_${SmrCode.GAEC3}`
        }));
    }

    ngOnDestroy() {
        this.sub.forEach(sub=>{
            sub.unsubscribe();
        })
    }

    ngAfterViewInit(): void {
        let savedData = this.localStorageService.getObjectData(this.storageSaveKey);
        if (savedData) {
            Object.keys(savedData).forEach((key) => {
                if (this.groundWaterForm.controls[key]) {
                    if (key == 'notes'){
                        //tinyMCE.activeEditor.setContent(savedData[key]);
                    }
                    this.groundWaterForm.controls[key].setValue(savedData[key]);
                }
            });
        }
        this.handleWeightingChange();
        this.setRequiredFields();

    }


    setRequiredFields() {
        let answerKeys = Object.keys(this.groundWaterForm.controls).filter(key => {
            return key.endsWith("Answer")
        })
        answerKeys.forEach(key => {
            this.sub.push(this.groundWaterForm.controls[key].valueChanges.subscribe((value) => {
                let rowKey = key.split("Answer")[0];
                if (+value === 1) {
                    this.groundWaterForm.controls[`${rowKey}LPISNum`].setValidators([Validators.required, RdcValidators.isCorrectLpisNum]);
                    this.groundWaterForm.controls[`${rowKey}LPISNum`].updateValueAndValidity();
                    this.groundWaterForm.controls[`${rowKey}Transgression`].setValidators(Validators.required);
                    this.groundWaterForm.controls[`${rowKey}Transgression`].updateValueAndValidity();

                } else {
                    this.groundWaterForm.controls[`${rowKey}LPISNum`].setValidators(null);
                    this.groundWaterForm.controls[`${rowKey}LPISNum`].updateValueAndValidity();
                    this.groundWaterForm.controls[`${rowKey}Transgression`].setValidators(null);
                    this.groundWaterForm.controls[`${rowKey}Transgression`].updateValueAndValidity();
                }
            }))
        });

    }


    handleWeightingChange(): void {
        let transgressionKeys = Object.keys(this.groundWaterForm.controls).filter(key => {
            return key.endsWith("Transgression")
        })
        transgressionKeys.forEach(key => {
            this.sub.push(this.groundWaterForm.controls[key].valueChanges.subscribe((value) => {
                this.calculateSec1Total();
            }))
        });
    }

    calculateSec1Total(): number {
        this.sec1Total = 0;
        this.sec1Total += +this.groundWaterForm.controls['gaec3Q1Transgression'].value;
        this.sec1Total += +this.groundWaterForm.controls['gaec3Q2Transgression'].value;
        this.sec1Total += +this.groundWaterForm.controls['gaec3Q3Transgression'].value;
        this.sec1Total += +this.groundWaterForm.controls['gaec3Q4Transgression'].value;
        this.weightingTotals.set('sec1Total', this.sec1Total);
        this.weightingTotals = new Map(this.weightingTotals);
        return this.sec1Total;
    }


    back(): void {
        window.history.back();
    }

    saveForm(): void {
        let details = this.inspectionDetailsService.getSelectedInspection(this.user, this.selectedInstance);
        this.inspectionDetailsService.updateStatus(this.user, SmrCode.GAEC3, SmrStatus.saved, details);
        this.localStorageService.saveObjectData(this.storageSaveKey, this.groundWaterForm.value);
    }

    finishForm(): void {
        let details = this.inspectionDetailsService.getSelectedInspection(this.user, this.selectedInstance);
        this.inspectionDetailsService.updateStatus(this.user, SmrCode.GAEC3, SmrStatus.finished, details);
        this.localStorageService.saveObjectData(this.storageSaveKey, this.groundWaterForm.value);
    }

    keyupHandlerFunction(changes:any){
      this.notes.setValue(changes);
    }

}