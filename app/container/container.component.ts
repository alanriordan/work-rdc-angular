import {Component, OnInit, OnDestroy,AfterContentInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SmrCodes, SmrDetails} from '../common/smr-codes';
import {AfitService} from '../service/afit.service';
import {LocalStorageService} from '../service/localstorage.service';
import {InspectionDetails} from '../common/inspection-details';
import {InspectionDetailsService} from '../common/inspection-details.service';
@Component({
    //selector : 'rdc-container',
    templateUrl: `app/container/container.component.html`
})
export class ContainerComponent implements OnInit, OnDestroy, AfterContentInit {

    private smrDetails: SmrDetails[] = SmrCodes;
    private activeSmrs: SmrDetails[] = [];
    private inspectionDetails:InspectionDetails[];

    private sub: any;
    private selectedInstance: number;
    private selectedHerd: string;

    constructor(private route: ActivatedRoute, private afitService: AfitService, private localStorageService: LocalStorageService,
    inspectionDetailsService:InspectionDetailsService) { 
        inspectionDetailsService.inspectionUpdated$.subscribe(
            (details:InspectionDetails[]) => {
                this.inspectionDetails = details;
                this.getOutForListForInspection("agr0776", this.selectedInstance);
            
            })
    };

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.selectedInstance = id;
            //this.getOutForListForInspection("agr0776", this.selectedInstance);
            console.log(id);
        });
    }


    ngAfterContentInit():void{
       this.getOutForListForInspection("agr0776", this.selectedInstance);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getOutForListForInspection(agr: string, instanceNum: number): void {
        this.inspectionDetails = this.localStorageService.getObjectData(agr);
        if (this.inspectionDetails) {
            this.activeSmrs = this.inspectionDetails.filter(inspectionDetail => inspectionDetail.inspectionInstanceNumber == instanceNum)
                .map(inspectionDetail => {
                    this.selectedHerd = inspectionDetail.herdNumber;
                    return this.smrDetails.filter(smr => (inspectionDetail.outFor && inspectionDetail.outFor.indexOf(smr.code) >= 0 )
                        || (inspectionDetail.adHoc && inspectionDetail.adHoc.indexOf(smr.code) >= 0))
                }
                )[0]                
        }       
    }

    back(): void {
        window.history.back();
    }



}