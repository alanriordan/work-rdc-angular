import {FarmerDetails} from './farmer-details';

export enum SmrStatus{
    initial = 0,
    saved = 1,
    finished = 2,
    complete = 3,
}

export class InspectionStatus{
    smrCode:number;
    smrStatus:SmrStatus;

    constructor(code:number, status:SmrStatus){
        this.smrCode = code;
        this.smrStatus = status;
    }
    
}

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
    status:InspectionStatus[];

 
}