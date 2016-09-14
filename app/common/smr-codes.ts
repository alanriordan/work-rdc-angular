export class SmrDetails{
   code : number;
   label : string;
   route : string;
}

export const SmrCodes : SmrDetails[] = [
    {code:-1, label:'Summary', route:'summary'},
    {code:-2, label:'Dashboard', route:'dashboard'},
    {code:1,label:'SPA', route:'spa'},
    {code:2,label:'GroundWater', route:'groundwater'},
    {code:3,label:'Sludge', route:'sludge'},
    {code:5,label:'Sac', route:'sac'},
    {code:6,label:'Porcine', route:'porcine'},
    {code:7,label:'Bovine', route:'dashboard'},
    {code:8,label:'Ovine', route:'dashboard'},
    {code:10,label:'Hormone', route:'dashboard'},
    {code:11,label:'Food', route:'dashboard'},
    {code:12,label:'Tse', route:'dashboard'},
    {code:13,label:'Nitrates', route:'dashboard'},
    {code:131,label:'NitratesWS', route:'dashboard'}

];

