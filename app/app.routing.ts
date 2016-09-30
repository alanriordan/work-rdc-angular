import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent }      from './summary/summary.component';
import { ContainerComponent }      from './container/container.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import {NitratesComponent} from './nitrates/nitrates.component';
import {WildBirdsComponent} from './wildbirds/wildbirds.component';
import {HabitatsComponent} from './habitats/habitats.component';
import {PorcineComponent} from './porcine/porcine.component';
import {GroundWaterComponent} from './groundwater/groundwater.component';
import {MinSoilCoverComponent} from './minimumSoilCover/minSoilCover.component';
import {SoilErosionComponent} from './soilErosion/soilErosion.component';
import {SomComponent} from './som/som.component';
import {LandscapeFeatureComponent} from './landscapeFeature/landscapeFeature.component';
import {FoodComponent} from './food/food.component';
import {BovineComponent} from './bovine/bovine.component';
import {OvineComponent} from './ovine/ovine.component';
import {TseComponent} from './tse/tse.component';
import {PlantProtectionComponent} from './plantProtection/plantProtection.component';
import {CalfWelfareComponent} from './calfWelfare/calfWelfare.component';
import {PigWelfareComponent} from './pigWelfare/pigWelfare.component';
import {AnimalWelfareComponent} from './animalWelfare/animalWelfare.component';
import {AncComponent} from './anc/anc.component';
import {YoungFarmerComponent} from './youngFarmer/youngFarmer.component';
import {BdgpComponent} from './bdgp/bdgp.component';
import {HormoneComponent} from './hormone/hormone.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},  
  {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
  {path:'container/:id', component:ContainerComponent, children:[
      {path: 'summary', component: SummaryComponent},
      {path: 'nitrates', component: NitratesComponent},
      {path: 'spa', component: WildBirdsComponent},
      {path: 'sac', component: HabitatsComponent},
      {path: 'porcine', component: PorcineComponent},
      {path: 'groundwater', component: GroundWaterComponent},
      {path: 'minsoilcover', component: MinSoilCoverComponent},
      {path: 'soilerosion', component: SoilErosionComponent},
      {path: 'som', component: SomComponent},
      {path: 'landscapefeature', component: LandscapeFeatureComponent},
      {path: 'food', component: FoodComponent},
      {path: 'bovine', component: BovineComponent},
      {path: 'ovine', component: OvineComponent},
      {path: 'tse', component: TseComponent},
      {path: 'plantprotection', component: PlantProtectionComponent},
      {path: 'calfwelfare', component: CalfWelfareComponent},
      {path: 'pigwelfare', component: PigWelfareComponent},
      {path: 'animalwelfare', component: AnimalWelfareComponent},
      {path: 'anc', component: AncComponent},
      {path: 'youngfarmer', component: YoungFarmerComponent},
      {path: 'bdgp', component: BdgpComponent},
      {path: 'hormone', component: HormoneComponent}
  ]} 
  
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);