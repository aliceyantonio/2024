import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UtilsService } from '../services/utils.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent {

  modalRef!: NgbModalRef;
  @ViewChild('invitationModal') invitationModal: any;


  constructor(
    public utilsService: UtilsService,
    public userService: UserService,
    public modal: NgbModal,
  ) {}

  openModal() {
    if (!this.modal.hasOpenModals()) {
      this.modalRef = this.modal.open(this.invitationModal, { ariaLabelledBy: '', size: 'xl' });
    }
  }

}
