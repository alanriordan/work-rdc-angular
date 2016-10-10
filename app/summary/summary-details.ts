import {SmrCode} from '../common/smr-codes';

export class SmrDetails{
   code : number;
   tabLabel : string;
   formLabel : string;
   route : string;
}


export const SummaryDetails : SmrDetails[] = [
    /*{code:-1, tabLabel:'Summary', formLabel:'', route:'summary'},
    {code:-2, tabLabel:'Dashboard', formLabel:'',route:'dashboard'},*/
    {code:SmrCode.SPA,tabLabel:'Spa', formLabel:'SMR 2 Wild Birds',route:'spa'}, 
    {code:SmrCode.GAEC3,tabLabel:'GroundWater', formLabel:'GAEC 3 Groundwater',route:'groundwater'},
    {code:SmrCode.GAEC4,tabLabel:'Minimum Soil Cover', formLabel:'GAEC 4 Minimum Soil Cover',route:'minsoilcover'},
    {code:SmrCode.GAEC5,tabLabel:'Soil Erosion', formLabel:'GAEC 5 Soil Erosion',route:'soilerosion'},
    {code:SmrCode.GAEC6,tabLabel:'Som', formLabel:'GAEC 6 SOM ',route:'som'},
    {code:SmrCode.GAEC7,tabLabel:'Landscape Features', formLabel:'GAEC 7 Landscape Features',route:'landscapefeatures'},   
    //{code:3,tabLabel:'Sludge', formLabel:'',route:'sludge'},
    {code:SmrCode.SAC,tabLabel:'Sac', formLabel:'SMR 3 Habitats ',route:'sac'},
    {code:SmrCode.PORCINE,tabLabel:'Porcine',formLabel:'SMR 6 Pig IDR', route:'porcine'},
    {code:SmrCode.BOVINE,tabLabel:'Bovine', formLabel:'SMR 7 Bovine IDR ',route:'bovine'},
    {code:SmrCode.OVINE,tabLabel:'Ovine', formLabel:'SMR 8 Ovine / Caprine IDR ',route:'ovine'},
    {code:SmrCode.HORMONE,tabLabel:'Hormone', formLabel:'SMR 5 Hormones ',route:'hormone'},
    {code:SmrCode.FOOD,tabLabel:'Food', formLabel:'SMR 4 Food/Feed Hygiene ',route:'food'},
    {code:SmrCode.TSE,tabLabel:'Tse', formLabel:'SMR 9 TSE ',route:'tse'},
    {code:SmrCode.NITRATES,tabLabel:'Nitrates', formLabel:'SMR 1 Nitrates',route:'nitrates'},
    {code:SmrCode.NITRATESWS,tabLabel:'NitratesWS',formLabel:'', route:'nitratesws'},
    {code:SmrCode.PESTICIDES,tabLabel:'Pesticides', formLabel:'SMR 10 Plant Protection ',route:'plantprotection'},
    {code:SmrCode.PESTICIDESWS,tabLabel:'PesticidesWS', formLabel:'',route:'pesticidesws'},
    {code:SmrCode.WELFARECALVES,tabLabel:'Welfare of Calves', formLabel:'SMR 11 Calf Welfare ',route:'calfwelfare'},
    {code:SmrCode.WELFAREPIGS,tabLabel:'Welfare of Pigs', formLabel:'SMR 12 Pig Welfare ',route:'pigwelfare'},
    {code:SmrCode.WELFAREANIMALS,tabLabel:'Welfare of Animals', formLabel:'SMR 13 Animal Welfare ',route:'animalwelfare'},
    //{code:23,tabLabel:'Suckler Cow', formLabel:'',route:'sucklercow'},
    {code:SmrCode.ANC,tabLabel:'ANC', formLabel:'ANC ',route:'anc'},
    //{code:28,tabLabel:'Grassland Sheep', formLabel:'',route:'grasslandsheep'},
    {code:SmrCode.YF,tabLabel:'Young Farmer', formLabel:'Young Farmer ',route:'youngfarmer'},    
    {code:SmrCode.BDGP,tabLabel:'BDGP', formLabel:'BDGP ',route:'bdgp'}

];