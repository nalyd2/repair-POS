import { Component, OnInit } from '@angular/core';
import { RepairTypeComponent } from 'src/app/componets/repair-type/repair-type.component';

@Component({
  selector: 'app-new-repair',
  templateUrl: './new-repair.component.html',
  styleUrls: ['./new-repair.component.scss'],
})
export class NewRepairComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  component = RepairTypeComponent;
}
