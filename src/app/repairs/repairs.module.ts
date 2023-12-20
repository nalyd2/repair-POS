import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepairsPageRoutingModule } from './repairs-routing.module';

import { RepairsPage } from './repairs.page';
import { CreateRepairModalComponent } from '../componets/create-repair-modal/create-repair-modal.component';
import { TypeComponent } from './component/type/type.component';
import { BaseNavComponent } from './component/base-nav/base-nav.component';
import { BrandsComponent } from './component/brands/brands.component';
//import { RepairTypeComponent } from '../componets/repair-type/repair-type.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepairsPageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [RepairsPage,CreateRepairModalComponent,TypeComponent
    ,BaseNavComponent,BrandsComponent
  ]
})
export class RepairsPageModule {}
