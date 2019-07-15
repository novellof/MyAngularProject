import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { myAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [myAnimation]

})
export class HomeComponent extends BaseComponent implements OnInit {
 
  constructor() { 
    super();
  }

  ngOnInit() {
    this.toggle();
  }


}
