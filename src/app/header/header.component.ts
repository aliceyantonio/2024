import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('weddingDateModal') weddingDateModal: any;

  modalRef!: NgbModalRef;
  closeResult!: string;

  isMenuCollapsed = true;
  selectedWedding: string


  constructor(
    public userService: UserService,
    private modal: NgbModal
  ) {
    this.selectedWedding = this.userService.getSelectedWedding();
  }

  fullScreen() {
    if (document.fullscreen) {
      document.exitFullscreen();
    } else {
      document.querySelector('body')!.requestFullscreen()
    }
  }

  ngAfterViewInit(): void {
    const currentUser = this.userService.getCurrentUser();
    const selectedWedding = this.userService.getSelectedWedding();

    if (!this.modal.hasOpenModals() && currentUser.userRoles.length > 1 && !selectedWedding) {
      this.modalRef = this.modal.open(this.weddingDateModal, { ariaLabelledBy: '', size: 'l', centered: true, backdrop: 'static' });
      this.modalRef.result.then((result) => {
        this.closeResult = 'Closed with: ' + result;
      });
    } else {
      this.weddingSelect(currentUser.userRoles[0])
    }
  }

  weddingSelect(wedding: string) {
    this.userService.setSelectedWedding(wedding);
    this.selectedWedding = wedding;
  }
}

declare global {
  interface Document {
    webkitIsFullScreen?: () => Promise<void>;
    mozFullScreen?: () => Promise<void>;
    msFullscreenElement?: () => Promise<void>;
  }
}
