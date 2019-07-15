import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { myAnimation } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ myAnimation ]
})
export class ContactComponent extends BaseComponent implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
    this.toggle();
  }

}
