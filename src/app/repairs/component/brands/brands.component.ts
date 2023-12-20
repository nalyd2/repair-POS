import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent  implements OnInit {
  component:any;
  returnUrl:any;
  brands:any;
  constructor(private router: Router, private navCtrl:NavController) {
if(router.getCurrentNavigation()?.extras.state){
  this.brands = router.getCurrentNavigation()?.extras.state
}
console.log(this.brands.brands);

   }

  ngOnInit() {}
  close(){
    this.returnUrl = this.router.navigateByUrl("/tabs/repairs");
   
  }
  back(){
this.navCtrl.back();
  }
}
