import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairsPage } from './repairs.page';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RepairTypeComponent } from './components/repair-type/repair-type.component';

const routes: Routes = [
  {
    path: '',
    component: RepairsPage
  },
  {
    path: 'newrepair',
    component: RepairTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairsPageRoutingModule {}
