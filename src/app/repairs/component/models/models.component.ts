import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RepairModel } from 'src/app/models/RepairModel';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})
export class ModelsComponent implements OnInit {

  returnUrl:any;
  models:any;
  params:any;
  RepairModel:RepairModel | undefined;

  constructor(private router: Router,
     private navCtrl:NavController)
  {
    this.params = router.getCurrentNavigation()?.extras.state;
    this.RepairModel = {
      ...this.params.repairModel
    };
    this.models = this.params.catalog[0].brands.filter((x:any) => x.brandsName == this.params.repairModel.brand)
  }

  ngOnInit() { 
       
  }
  close() {
    this.returnUrl = this.router.navigateByUrl("/tabs/repairs");

  }
  back() {
    this.navCtrl.back();
  }
  goToProblems(model:any){
    this.RepairModel = {
      ...this.RepairModel,
      device: model.modelName
    }
    this.navCtrl.navigateForward('/tabs/repairs/problem',{state:{repairModel:this.RepairModel,catalog:this.params.catalog[0].problems}});
  }
}
