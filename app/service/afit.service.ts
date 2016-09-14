import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {InsepctionDetailsMock} from '../common/inspection-details-mock';
import {InspectionDetails} from '../common/inspection-details';
import {SmrDetails} from '../common/smr-codes';


@Injectable()
export class AfitService{

    constructor(private http:Http){};

    getInspectionDetails():Promise<InspectionDetails[]>{
        return Promise.resolve(InsepctionDetailsMock);
    }  


}