import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }
  types =[{
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
    },
  ],
  "problems":["Diagnostico","lcd","Bateria","Centro De Carga","Garantia"]
  },
  {
    "typeName":"PC",
    "brands":[{
      "brandsName":"Apple",
      "models":[{
        "modelName":"Iphone 11"
      }]
    }],
    "problems":["Diagnostico","lcd","Bateria","Centro De Carga","Garantia"]
  },
  {
    "typeName":"Dron",
    "brands":[{
      "brandsName":"Apple",
      "models":[{
        "modelName":"Iphone 11"
      }]
    }],
    "problems":["Diagnostico","lcd","Bateria","Centro De Carga","Garantia"]
  }
];
  //TODO: cambiar a observable 
  getCatalog(){
    return this.types;
  
  }

}
