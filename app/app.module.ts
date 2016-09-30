import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent }  from './app.component';

import {DashboardModule} from './dashboard/dashboard.module';
import {AfitService} from './service/afit.service';
import {routing} from './app.routing';
import {MenuComponent} from './common/menu.component';
import {ContainerModule} from './container/container.module';
import {SummaryModule} from './summary/summary.module';
import {OnlineService} from './common/online-check.service';
import {LocalStorageService} from './service/localstorage.service';
import {NitratesModule} from './nitrates/nitrates.module';
import {InspectionDetailsService} from './common/inspection-details.service';
import {WildBirdsModule} from './wildbirds/wildbirds.module';
import {HabitatsModule} from './habitats/habitats.module';
import {PorcineModule} from './porcine/porcine.module';
import {GroundWaterModule} from './groundwater/groundwater.module';
import {MinSoilCoverModule} from './minimumSoilCover/minSoilCover.module';
import {SoilErosionModule} from './soilErosion/soilErosion.module';
import {SomModule} from './som/som.module';
import {LandscapeFeatureModule} from './landscapeFeature/landscapeFeature.module';
import {FoodModule} from './food/food.module';
import {BovineModule} from './bovine/bovine.module';
import {OvineModule} from './ovine/ovine.module';
import {TseModule} from './tse/tse.module';
import {AncModule} from './anc/anc.module';
import {PlantProtectionModule} from './plantProtection/plantProtection.module';
import {CalfWelfareModule} from './calfWelfare/calfWelfare.module';
import {PigWelfareModule} from './pigWelfare/pigWelfare.module';
import {AnimalWelfareModule} from './animalWelfare/animalWelfare.module';
import {YoungFarmerModule} from './youngFarmer/youngFarmer.module';
import {BdgpModule} from './bdgp/bdgp.module';
import {HormoneModule} from './hormone/hormone.module';


@NgModule({
  imports: [BrowserModule, HttpModule, routing, DashboardModule,
    SummaryModule, ContainerModule, NitratesModule, WildBirdsModule, HabitatsModule,
    PorcineModule, GroundWaterModule, MinSoilCoverModule, SoilErosionModule, SomModule,
    LandscapeFeatureModule, FoodModule, BovineModule, OvineModule, TseModule, PlantProtectionModule,
    CalfWelfareModule, PigWelfareModule, AnimalWelfareModule, AncModule, YoungFarmerModule,
    BdgpModule, HormoneModule
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AfitService, OnlineService,LocalStorageService,InspectionDetailsService]
})
export class AppModule { }
