import {Injectable} from '@angular/core';
import {InspectionDetails} from '../common/inspection-details';
import {LocalStorageService} from '../service/localstorage.service';

@Injectable()
export class SummaryService{

    

    constructor(private localStorageService:LocalStorageService){};

   getInspectionDetailByInstance(agr:string, instanceNum:number):InspectionDetails{
       let inspectionDetails:InspectionDetails[] = this.localStorageService.getObjectData(agr);       
       var detail = inspectionDetails.filter(inspectionDetail => inspectionDetail.inspectionInstanceNumber == instanceNum);
       //Will only be one match so return the first element
       return detail[0];
    }


    createAdHoc(agr:string, smrCodes:number[], instanceNum:number):InspectionDetails{
        let modifiedInspection:InspectionDetails;
        let inspectionDetails:InspectionDetails[] = this.localStorageService.getObjectData(agr);
        inspectionDetails.filter(inspectionDetails => inspectionDetails.inspectionInstanceNumber == instanceNum)
        .map(inspectionDetail => {
            smrCodes.forEach(smrCode => {
                inspectionDetail.adHoc.indexOf(smrCode) == -1 ?
                 inspectionDetail.adHoc[inspectionDetail.adHoc.length] = smrCode : inspectionDetail.adHoc;
            })           
            modifiedInspection = inspectionDetail;
        });
        //this.localStorageService.saveObjectData(agr, inspectionDetails);
        return modifiedInspection;
    }

    removeAdHoc(agr:string, smrCode:number, instanceNum:number):InspectionDetails{
        let modifiedInspection:InspectionDetails;
        let inspectionDetails:InspectionDetails[] = this.localStorageService.getObjectData(agr);
        inspectionDetails.filter(inspectionDetails => inspectionDetails.inspectionInstanceNumber == instanceNum)
        .map(inspectionDetail => {
                let index = inspectionDetail.adHoc.indexOf(smrCode);
                 index == -1 ?  inspectionDetail.adHoc : inspectionDetail.adHoc.splice(index, 1);
                                  
            modifiedInspection = inspectionDetail;
        });       
        return modifiedInspection;
    }


}



