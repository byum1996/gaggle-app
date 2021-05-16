import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css']
})
export class CancelButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickClose() {
    this.closeModalCallback();
  }

  @Input()
  closeModalCallback: () => void;
}
