import { Component, OnInit } from '@angular/core';
import { BrandsComponent } from '../brands/brands.component';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CatalogService } from 'src/app/services/catalog.service';
import { RepairModel } from 'src/app/models/RepairModel';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {

  component = BrandsComponent;
  returnUrl: any;
  types: any[] = [];

  constructor(private router: Router, private nav: NavController
    , private readonly $catalogserv: CatalogService) {
    this.types = $catalogserv.getCatalog();
  }

  ngOnInit() { }

  close() {
    this.returnUrl = this.router.navigateByUrl("/tabs/repairs");

  }
  goToBrand(type: any) {
    let RepairModel:RepairModel =
    {
      type : type.typeName
    };

    this.nav.navigateForward('/tabs/repairs/brand', { state: { repairModel:RepairModel,catalog:this.types.filter(x => x.typeName == type.typeName) } });
  }
  back() {
    this.nav.back();
  }
  createNewType() {
    this.types.push({
      "typeName": "Otro",
      "brands": [{
        "brandsName": "Apple",
        "models": [{
          "modelName": "Iphone 11"
        }]
      }]
    })
  }
}
