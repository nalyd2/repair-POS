import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent  implements OnInit {
  returnUrl: any;
  fixingProblems:any;
  params:any;

  constructor(private router: Router, private navCtrl: NavController) 
  {
    this.params = router.getCurrentNavigation()?.extras.state;
    this.fixingProblems = this.params.catalog;
   }

  ngOnInit() {}
  close() {
    this.returnUrl = this.router.navigateByUrl("/tabs/repairs");

  }
  back() {
    this.navCtrl.back();
  }
}
