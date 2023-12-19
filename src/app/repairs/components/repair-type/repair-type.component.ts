import { Component, OnInit } from '@angular/core';
import { BrandComponent } from '../brand/brand.component';
import { PageTwoComponent } from '../page-two-component';
import { IonNav, NavController } from '@ionic/angular';
import { PageThreeComponent } from '../page-three-component';

@Component({
  selector: 'app-repair-type',
  templateUrl: './repair-type.component.html',
  styleUrls: ['./repair-type.component.scss'],
})
export class RepairTypeComponent  implements OnInit {

 
  
  constructor(public navCtrl: IonNav) { }

  ngOnInit() {}

  pageBrand(){
    this.navCtrl.push(PageTwoComponent)
  }
  component = PageThreeComponent;
}
