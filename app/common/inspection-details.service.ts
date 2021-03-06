import {Injectable, EventEmitter} from '@angular/core';
import {InspectionDetails,SmrStatus, InspectionStatus} from './inspection-details';
import {LocalStorageService} from '../service/localstorage.service';
import {SmrCodes,SmrDetails} from './smr-codes';
@Injectable()
export class InspectionDetailsService{

    public inspectionUpdated$: EventEmitter<InspectionDetails[]> = new EventEmitter<InspectionDetails[]>();

    constructor(private localStorageService:LocalStorageService){};


    getActiveInspectionList(agr: string, instanceNum: number): SmrDetails[] {
        let inspectionDetails: InspectionDetails[] = this.localStorageService.getObjectData(agr);
        if (inspectionDetails) {
            return inspectionDetails.filter(inspectionDetail => inspectionDetail.inspectionInstanceNumber == instanceNum)
                .map(inspectionDetail => {                    
                    return SmrCodes.filter(smr =>
                        inspectionDetail.outFor.indexOf(smr.code) > 0 || inspectionDetail.adHoc.indexOf(smr.code) > 0)
                }
                )[0]                
        }       
    }



    getSelectedInspection(agr: string, instanceNum: number): InspectionDetails {
        let inspectionDetails: InspectionDetails[] = this.localStorageService.getObjectData(agr);
        if (inspectionDetails) {
            return inspectionDetails.filter(inspectionDetail => inspectionDetail.inspectionInstanceNumber == instanceNum)[0]                
        }       
    }


    updateStatus(agr:string, smrCode:number, status:SmrStatus, inspection:InspectionDetails){
        inspection.status.filter(inspectionStatus => {
            return inspectionStatus.smrCode == smrCode
        }).map(inspectionStatus => {
            return inspectionStatus.smrStatus = status;
        }).length == 0 ? inspection.status.push(new InspectionStatus(smrCode, status)) : "";
        this.updateInspection(agr, inspection, inspection.inspectionInstanceNumber);
    }


    updateInspection(agr:string, updatedInspection:InspectionDetails, instanceNum:number):void{
       let inspectionDetails: InspectionDetails[] = this.localStorageService.getObjectData(agr);
       if (inspectionDetails){
           inspectionDetails = inspectionDetails.map(inspection => {
               return inspection.inspectionInstanceNumber == instanceNum ? updatedInspection : inspection;               
        });
            this.localStorageService.saveObjectData(agr, inspectionDetails);
            this.inspectionUpdated$.emit(inspectionDetails);
       }
    }

}