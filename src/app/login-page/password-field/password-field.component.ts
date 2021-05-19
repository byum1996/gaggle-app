import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css']
})
export class PasswordFieldComponent implements OnInit {
  passwordValue:string = '';
  clearPassword() {
    this.passwordValue = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
