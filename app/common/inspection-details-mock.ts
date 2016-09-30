import {InspectionDetails} from './inspection-details';


/*export const InsepctionDetailsMock: InspectionDetails[] = [
    { afitInspectionType: 0, downloadedTime: "12/9/2016, 11:30:49", herdNumber: "D1370953", 
    inspectionInstanceNumber: 563595, onlineApplicant: false, outFor: DataSetup.getSet('1,2,3,4,5,7,8'), adHoc:new Set<number>(), schemeYear: 2016,
    farmerDetails : {firstName:'Alan',surname:'Riordan',address1:'Monard'} },
    { afitInspectionType: 701, downloadedTime: "13/9/2016, 11:30:49", adHoc:new Set<number>(),herdNumber: "D1370954", inspectionInstanceNumber: 563596, onlineApplicant: true, outFor: DataSetup.getSet('10,11,12,13,14'), schemeYear: 2016,
    farmerDetails : {firstName:'Alan',surname:'Riordan',address1:'Monard'}  },
    { afitInspectionType: 801, downloadedTime: "14/9/2016, 11:30:49", adHoc:new Set<number>(),herdNumber: "D1370955", inspectionInstanceNumber: 563597, onlineApplicant: false, outFor: DataSetup.getSet('7,8,10,12,13,14'), schemeYear: 2016,
    farmerDetails : {firstName:'Alan',surname:'Riordan',address1:'Monard'}  },
    { afitInspectionType: 402, downloadedTime: "15/9/2016, 11:30:49", adHoc:new Set<number>(),herdNumber: "D1370956", inspectionInstanceNumber: 563598, onlineApplicant: false, outFor: DataSetup.getSet('12,23,31,32'), schemeYear: 2016,
    farmerDetails : {firstName:'Alan',surname:'Riordan',address1:'Monard'}  },
     { afitInspectionType: 801, downloadedTime: "12/9/2016, 11:30:49", herdNumber: "Alan Test", 
    inspectionInstanceNumber: 23233, onlineApplicant: false, outFor: DataSetup.getSet('5,6,7,20,22'), adHoc:new Set<number>(), schemeYear: 2016,
    farmerDetails : {firstName:'Yoel',surname:'Romareo',address1:'Monard'} }
]; */


export const InsepctionDetailsMock: InspectionDetails[] = [
    { afitInspectionType: 0, downloadedTime: "12/9/2016, 11:30:49", herdNumber: "D1370953", status:[],
    inspectionInstanceNumber: 563595, onlineApplicant: false, outFor: [1,2,3,4,5,7,8], adHoc:[], schemeYear: 2016,
    farmerDetails : {firstName:'Alan',surname:'Riordan',address1:'Monard'} },
    { afitInspectionType: 701, downloadedTime: "13/9/2016, 11:30:49", adHoc:[],status:[],herdNumber: "D1370954", inspectionInstanceNumber: 563596, onlineApplicant: true, outFor:[10,11,12,13,14], schemeYear: 2016,
    farmerDetails : {firstName:'Alan',surname:'Riordan',address1:'Monard'}  },
    { afitInspectionType: 801, downloadedTime: "14/9/2016, 11:30:49", adHoc:[],status:[],herdNumber: "D1370955", inspectionInstanceNumber: 563597, onlineApplicant: false, outFor: [7,8,10,12,13,14], schemeYear: 2016,
    farmerDetails : {firstName:'Alan',surname:'Riordan',address1:'Monard'}  },
    { afitInspectionType: 402, downloadedTime: "15/9/2016, 11:30:49", adHoc:[],status:[],herdNumber: "D1370956", inspectionInstanceNumber: 563598, onlineApplicant: false, outFor: [8,13,12,23,31,32], schemeYear: 2016,
    farmerDetails : {firstName:'Alan',surname:'Riordan',address1:'Monard'}  },
     { afitInspectionType: 801, downloadedTime: "12/9/2016, 11:30:49", herdNumber: "Alan Test",  status:[],
    inspectionInstanceNumber: 23233, onlineApplicant: false, outFor: [5,6,7,20,22], adHoc:[], schemeYear: 2016,
    farmerDetails : {firstName:'Yoel',surname:'Romareo',address1:'Monard'} }
];