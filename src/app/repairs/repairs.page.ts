import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { CreateRepairModalComponent } from '../componets/create-repair-modal/create-repair-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.page.html',
  styleUrls: ['./repairs.page.scss'],
})
export class RepairsPage implements OnInit {
  returnUrl:any;
  constructor(private modalCtrl : ModalController,
    private routerOutlet: IonRouterOutlet,private router: Router) { }

  ngOnInit() {
  }
  async showModal(){
    const modal = this.modalCtrl.create({component:CreateRepairModalComponent});
    (await modal).present();
  }
  goToNewRepair(){
    this.returnUrl = this.router.navigateByUrl("/tabs/repairs/baseNav");
  }
  

}
