export class SmrDetails{
   code : number;
   tabLabel : string;
   formLabel : string;
   route : string;

}

export enum SmrCode{
 SPA = 1, 
 GROUNDWATER = 2,
 SLUDGE = 3,    
 SAC =5 ,
 PORCINE = 6,    
 BOVINE =7,
 OVINE =8,
 HORMONE = 10,
 FOOD =11,
 TSE =12,
 NITRATES =13,		    
 NITRATESWS =131,
 PESTICIDES =14, 
 PESTICIDESWS =141,
 WELFARECALVES = 19, 
 WELFAREPIGS = 20,
 WELFAREANIMALS = 21,
 ELIGIBILITY=29, 
 GAEC1 = 31,
 GAEC2 = 32,
 GAEC3 = 33,
 GAEC4 = 34,
 GAEC5 = 35,
 GAEC6 = 36,
 GAEC7 = 37,
 YF = 38,
 ANC = 25,
 BDGP = 40,
 AEOS12 = 401,
 AEOS13 = 402,
 AEOS14 = 403,
 GLAS = 701,
 GLAS2 = 702,
 KT = 801 
}

export const SmrCodes : SmrDetails[] = [
    {code:SmrCode.NITRATES,tabLabel:'Nitrates', formLabel:'SMR 1 Nitrates',route:'nitrates'},
    {code:SmrCode.GAEC3,tabLabel:'GroundWater', formLabel:'GAEC 3 Groundwater',route:'groundwater'},
    {code:SmrCode.GAEC4,tabLabel:'Minimum Soil Cover', formLabel:'GAEC 4 Minimum Soil Cover',route:'minsoilcover'},
    {code:SmrCode.GAEC5,tabLabel:'Soil Erosion', formLabel:'GAEC 5 Soil Erosion',route:'soilerosion'},
    {code:SmrCode.GAEC6,tabLabel:'Som', formLabel:'GAEC 6 SOM ',route:'som'},
    {code:SmrCode.GAEC7,tabLabel:'Landscape Features', formLabel:'GAEC 7 Landscape Features',route:'landscapefeatures'},
    {code:SmrCode.SPA,tabLabel:'Spa', formLabel:'SMR 2 Wild Birds',route:'spa'}, 
    {code:SmrCode.SAC,tabLabel:'Sac', formLabel:'SMR 3 Habitats ',route:'sac'},
    {code:SmrCode.FOOD,tabLabel:'Food', formLabel:'SMR 4 Food/Feed Hygiene ',route:'food'},
    {code:SmrCode.HORMONE,tabLabel:'Hormone', formLabel:'SMR 5 Hormones ',route:'hormone'},    
    {code:SmrCode.PORCINE,tabLabel:'Porcine',formLabel:'SMR 6 Pig IDR', route:'porcine'},
    {code:SmrCode.BOVINE,tabLabel:'Bovine', formLabel:'SMR 7 Bovine IDR ',route:'bovine'},
    {code:SmrCode.OVINE,tabLabel:'Ovine', formLabel:'SMR 8 Ovine / Caprine IDR ',route:'ovine'},   
    {code:SmrCode.TSE,tabLabel:'Tse', formLabel:'SMR 9 TSE ',route:'tse'},
    {code:SmrCode.PESTICIDES,tabLabel:'Pesticides', formLabel:'SMR 10 Plant Protection ',route:'plantprotection'},  
    {code:SmrCode.WELFARECALVES,tabLabel:'Welfare of Calves', formLabel:'SMR 11 Calf Welfare ',route:'calfwelfare'},
    {code:SmrCode.WELFAREPIGS,tabLabel:'Welfare of Pigs', formLabel:'SMR 12 Pig Welfare ',route:'pigwelfare'},
    {code:SmrCode.WELFAREANIMALS,tabLabel:'Welfare of Animals', formLabel:'SMR 13 Animal Welfare ',route:'animalwelfare'},    
    {code:SmrCode.ANC,tabLabel:'ANC', formLabel:'ANC ',route:'anc'},    
    {code:SmrCode.YF,tabLabel:'Young Farmer', formLabel:'Young Farmer ',route:'youngfarmer'},    
    {code:SmrCode.BDGP,tabLabel:'BDGP', formLabel:'BDGP ',route:'bdgp'}

];


  export function getSmrCodeFromRoute(route:string):number{
       return SmrCodes.filter(smrCodes => smrCodes.route == route).map(code => code.code as number)[0];      
       
  }

