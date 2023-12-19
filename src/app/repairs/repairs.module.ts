import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairsPageRoutingModule } from './repairs-routing.module';

import { RepairsPage } from './repairs.page';
import { CreateRepairModalComponent } from '../componets/create-repair-modal/create-repair-modal.component';
import { RepairTypeComponent } from './components/repair-type/repair-type.component';
import { BrandComponent } from './components/brand/brand.component';
import { NewRepairComponent } from './components/new-repair/new-repair.component';
import { PageTwoComponent } from './components/page-two-component';
import { PageThreeComponent } from './components/page-three-component';
//import { RepairTypeComponent } from '../componets/repair-type/repair-type.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairsPageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [RepairsPage,CreateRepairModalComponent,
    RepairTypeComponent,BrandComponent,NewRepairComponent
    ,PageTwoComponent,PageThreeComponent
  ]
})
export class RepairsPageModule {}
