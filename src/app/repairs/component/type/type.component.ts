import { Component, OnInit } from '@angular/core';
import { BrandsComponent } from '../brands/brands.component';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent  implements OnInit {

  component = BrandsComponent;
  returnUrl:any;
  types = [{
    "typeName":"Telefono",
    "brands":[{
      "brandsName":"Apple",
      "models":[{
        "modelName":"Iphone 15"
      },
      {
        "modelName":"Iphone 14"
      },
      {
        "modelName":"Iphone 13"
      },
      {
        "modelName":"Iphone 12"
      },
    ]
    },
    {
      "brandsName":"Huawei",
      "models":[{
        "modelName":"P30"
      },
      {
        "modelName":"P30 Lite"
      },
      {
        "modelName":"Nova 9"
      }
    ]
    },
    {
      "brandsName":"Samsung",
      "models":[{
        "modelName":"S20"
      },
      {
        "modelName":"S23"
      },
      {
        "modelName":"A5"
      },
    ]
    }]
  },
  {
    "typeName":"PC",
    "brands":[{
      "brandsName":"Apple",
      "models":[{
        "modelName":"Iphone 11"
      }]
    }]
  },
  {
    "typeName":"Dron",
    "brands":[{
      "brandsName":"Apple",
      "models":[{
        "modelName":"Iphone 11"
      }]
    }]
  }
];
  constructor(private router: Router, private nav:NavController) { }

  ngOnInit() {}

  close(){
    this.returnUrl = this.router.navigateByUrl("/tabs/repairs");
   
  }
  selectType(algo:any){

  }
  goToBrand(brand:any){
    this.nav.navigateForward('/tabs/repairs/brand',{state:brand});
  }
  back(){
    this.nav.back();
      }
  createNewType(){
    this.types.push({
      "typeName":"Otro",
      "brands":[{
        "brandsName":"Apple",
        "models":[{
          "modelName":"Iphone 11"
        }]
      }]
    })
  }
}
