import {Injectable} from '@angular/core';
import {InspectionDetails} from './inspection-details';
import {LocalStorageService} from '../service/localstorage.service';
import {SmrCodes,SmrDetails} from './smr-codes';
@Injectable()
export class InspectionDetailsService{


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

}