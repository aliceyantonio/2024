import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '2024';
  isLogin: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser();

    this.router.events.subscribe(event => {
      this.isLogin = location.href.includes('login');
    })

  }
}
