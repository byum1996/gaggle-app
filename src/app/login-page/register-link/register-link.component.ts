import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modal';

@Component({
  selector: 'app-register-link',
  templateUrl: './register-link.component.html',
  styleUrls: ['./register-link.component.css']
})
export class RegisterLinkComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  
  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      console.log(`closing ${id}`);
      this.modalService.close(id);
  }
  
  closeModalCallback = (): void => {
    this.closeModal('NewUserDialog');
  }

}
