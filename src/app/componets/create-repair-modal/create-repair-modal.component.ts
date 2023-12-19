import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonNav, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { RepairTypeComponent } from '../repair-type/repair-type.component';
import { RepairModel } from 'src/app/models/RepairModel';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-repair-modal',
  templateUrl: './create-repair-modal.component.html',
  styleUrls: ['./create-repair-modal.component.scss'],
})
export class CreateRepairModalComponent  implements OnInit {

  repairGroup!: FormGroup;
  newRepair: RepairModel | undefined;

  constructor(private modalCtrl : ModalController,
    private formBuilder:FormBuilder) { 

      this.repairGroup = formBuilder.group({
        device : new FormControl(''),
        deviceProblem: new FormControl(''),
        serialImei: new FormControl(''),
        lockCode: new FormControl('')
      });
    }
   
  ngOnInit() {}
  @ViewChild(IonModal) modal!: IonModal;
  step = "Que Repararemos Hoy?"
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  Rtype: boolean = true;
  Rbrand : boolean = false;
  Rmodel : boolean = false;
  Rfixed : boolean = false;
  RForm : boolean = false;
  brands: any;
  models:any;
  fixingProblems:any;
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
    "typeName":"Computadora",
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
fixingCatalog = [{
  "type":"Telefono",
  "problems":[
    {"name":"Diagnostico"},
    {"name":"LCD"},
    {"name":"Pin de Carga"}
]
},{
  "type":"Computadora",
  "problems":["Diagnostico","lcd","Bateria","Centro De Carga","Garantia"
]
}
]
  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  previous(){
    if(this.Rbrand){
      this.Rbrand =false;
      this.Rtype = true;
      this.step = "Que Repararemos Hoy?"
    }
    if(this.Rmodel){
      this.step = "Seleciona la Marca"
      this.Rbrand =true;
      this.Rmodel= false;
    }
    if(this.Rfixed)
    {
      this.Rmodel=true;
      this.Rfixed=false;
      this.step = "Seleciona el Modelo"
    }
    if(this.RForm){
      this.RForm = false;
      this.Rfixed = true;
      this.step = "Que Problema Repararemos?"
    }
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  selectType(type:any){
   this.fixingProblems = this.fixingCatalog.filter(x => x.type == "Telefono");
    console.log("este es el tip",type);
    this.Rtype = false;
    this.Rbrand = true;
    this.step = "Seleciona la Marca"
    this.brands = type.brands;
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
  createBrand(){

  }
  selectbrand(brand:any){
    this.models = brand.models;
    this.Rbrand = false;
    this.Rmodel = true;
    this.step = "Seleciona el Modelo"
  }
  selecModel(model:any){
    this.Rmodel =false;
    this.Rfixed = true;
    console.log(model);
    this.newRepair = {
    device: model.modelName
    };
    this.step = "Que Problema Repararemos?"
    //this.fixingProblems.filter(x => x.type == "Telefono");
  }
  createModel(){

  }
  selectProblem(problem:any){
    this.Rfixed = false;
    this.RForm=true;
    this.step = "Nueva Reparaciòn"
    
  this.newRepair = {
    ...this.newRepair,
    deviceProblem : problem.name
  }
  this.repairGroup.patchValue({
    device: this.newRepair.device,
    deviceProblem :this.newRepair.deviceProblem
  });
  console.log(this.newRepair);
  }

}
