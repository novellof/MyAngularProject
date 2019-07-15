import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { myAnimation } from '../animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [myAnimation]
})
export class AboutComponent extends BaseComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
    this.toggle();
  }

}
