import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';
import { CreateRepairModalComponent } from '../create-repair-modal/create-repair-modal.component';

@Component({
  selector: 'app-repair-type',
  templateUrl: './repair-type.component.html',
  styleUrls: ['./repair-type.component.scss'],
})
export class RepairTypeComponent  implements OnInit {
  rootPage: any;

  constructor(private modalCtrl : ModalController,
    private nav: IonNav) { }

  ngOnInit() {}
 
}
