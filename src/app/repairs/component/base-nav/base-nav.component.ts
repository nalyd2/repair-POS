import { Component, OnInit } from '@angular/core';
import { TypeComponent } from '../type/type.component';

@Component({
  selector: 'app-base-nav',
  templateUrl: './base-nav.component.html',
  styleUrls: ['./base-nav.component.scss'],
})
export class BaseNavComponent  implements OnInit {

  component = TypeComponent;
  constructor() { }

  ngOnInit() {}

}
