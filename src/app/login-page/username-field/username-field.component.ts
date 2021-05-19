import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-field',
  templateUrl: './username-field.component.html',
  styleUrls: ['./username-field.component.css']
})
export class UsernameFieldComponent implements OnInit {
  usernameValue:string = '';
  clearUsername() {
    this.usernameValue = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
