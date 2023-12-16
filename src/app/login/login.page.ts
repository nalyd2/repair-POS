import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  returnUrl:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.returnUrl = this.router.navigateByUrl("/tabs");
    }
    
}
