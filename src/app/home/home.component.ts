import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  section1Animated = false;
  section2Animated = false;
  section3Animated = false;
  section4Animated = false;
  section5Animated = false;
  section6Animated = false;

  constructor(
    public userService: UserService,
    public router: Router,
    public modal: NgbModal,
  ) { }

  ngOnInit(): void {
  }


}
