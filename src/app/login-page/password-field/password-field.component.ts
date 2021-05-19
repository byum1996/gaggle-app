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

  fieldTextType: boolean;
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
