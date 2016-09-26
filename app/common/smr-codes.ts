export class SmrDetails{
   code : number;
   tabLabel : string;
   formLabel : string;
   route : string;

}

export const SmrCodes : SmrDetails[] = [
    /*{code:-1, tabLabel:'Summary', formLabel:'', route:'summary'},
    {code:-2, tabLabel:'Dashboard', formLabel:'',route:'dashboard'},*/
    {code:1,tabLabel:'Spa', formLabel:'SMR 2 Wild Birds',route:'spa'},
    {code:2,tabLabel:'GroundWater', formLabel:'GAEC 3 Groundwater',route:'groundwater'},
    {code:3,tabLabel:'Sludge', formLabel:'',route:'sludge'},
    {code:5,tabLabel:'Sac', formLabel:'SMR 3 Habitats ',route:'sac'},
    {code:6,tabLabel:'Porcine',formLabel:'SMR 6 Pig IDR', route:'porcine'},
    {code:7,tabLabel:'Bovine', formLabel:'SMR 7 Bovine IDR ',route:'bovine'},
    {code:8,tabLabel:'Ovine', formLabel:'SMR 8 Ovine / Caprine IDR ',route:'ovine'},
    {code:10,tabLabel:'Hormone', formLabel:'SMR 5 Hormones ',route:'hormon'},
    {code:11,tabLabel:'Food', formLabel:'SMR 4 Food/Feed Hygiene ',route:'food'},
    {code:12,tabLabel:'Tse', formLabel:'SMR 9 TSE ',route:'tse'},
    {code:13,tabLabel:'Nitrates', formLabel:'SMR 1 Nitrates',route:'nitrates'},
    {code:131,tabLabel:'NitratesWS',formLabel:'', route:'nitratesws'},
    {code:14,tabLabel:'Pesticides', formLabel:'SMR 10 Plant Protection ',route:'pesticides'},
    {code:141,tabLabel:'PesticidesWS', formLabel:'',route:'pesticidesws'},
    {code:19,tabLabel:'Welfare of Calves', formLabel:'SMR 11 Calf Welfare ',route:'woc'},
    {code:20,tabLabel:'Welfare of Pigs', formLabel:'SMR 12 Pig Welfare ',route:'wop'},
    {code:21,tabLabel:'Welfare of Animals', formLabel:'SMR 13 Animal Welfare ',route:'woa'},
    {code:23,tabLabel:'Suckler Cow', formLabel:'',route:'sucklercow'},
    {code:25,tabLabel:'ANC', formLabel:'ANC ',route:'anc'},
    {code:28,tabLabel:'Grassland Sheep', formLabel:'',route:'grasslandsheep'},
    {code:38,tabLabel:'Young Farmer', formLabel:'Young Farmer ',route:'yf'},    
    {code:40,tabLabel:'BDGP', formLabel:'BDGP ',route:'bdgp'}

];


  export function getSmrCodeFromRoute(route:string):number{
       return SmrCodes.filter(smrCodes => smrCodes.route == route).map(code => code.code as number)[0];      
       
  }

