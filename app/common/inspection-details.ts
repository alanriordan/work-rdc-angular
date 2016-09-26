import {FarmerDetails} from './farmer-details';

export class InspectionDetails{
    afitInspectionType : number;
    downloadedTime : string;
    herdNumber : string;
    inspectionInstanceNumber:number;
    onlineApplicant : boolean;
    outFor:number[] = [];
    schemeYear : number;
    farmerDetails: FarmerDetails;
    adHoc:number[] = [];
   
}