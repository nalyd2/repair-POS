import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RepairModel } from 'src/app/models/RepairModel';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  component: any;
  returnUrl: any;
  params: any;
  brands: any;
  RepairModel:RepairModel | undefined;

  constructor(private router: Router, private navCtrl: NavController) {
    if (router.getCurrentNavigation()?.extras.state) {
      this.params = router.getCurrentNavigation()?.extras.state
    }
    this.brands = this.params.catalog[0].brands;
    this.RepairModel = {
      ...this.params.repairModel
    };
  }

  ngOnInit() { }
  close() {
    this.returnUrl = this.router.navigateByUrl("/tabs/repairs");

  }
  back() {
    this.navCtrl.back();
  }
  goToModel(brand:any){
    this.RepairModel = {
      ...this.RepairModel,
      brand: brand.brandsName
    }
    this.navCtrl.navigateForward('/tabs/repairs/models',{state:{repairModel:this.RepairModel,catalog:this.params.catalog}});

  }
}
