import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.css']
})
export class EmailFieldComponent implements OnInit {
  emailValue:string = '';
  clearEmail() {
    this.emailValue = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
