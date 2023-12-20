import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairsPage } from './repairs.page';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BaseNavComponent } from './component/base-nav/base-nav.component';
import { BrandsComponent } from './component/brands/brands.component';
import { ModelsComponent } from './component/models/models.component';
import { ProblemComponent } from './component/problem/problem.component';

const routes: Routes = [
  {
    path: '',
    component: RepairsPage
  },
  {
    path: 'baseNav',
    component: BaseNavComponent
  },
  {
    path: 'brand',
    component: BrandsComponent
  },
  {
    path: 'models',
    component: ModelsComponent
  },
  {
    path: 'problem',
    component: ProblemComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairsPageRoutingModule {}
