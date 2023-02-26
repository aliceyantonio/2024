import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  password: any;

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    bookingId: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private userService: UserService,
    private fb: FormBuilder
  ) {

  }

  login() {
    localStorage.clear();

    this.userService.getUsers().subscribe(res => {
      const currentUser = JSON.parse(res.value).find((user:User) =>
        user.username === this.loginForm.value.username
        && user.bookingIds.includes(this.loginForm.value.bookingId!)
      );

      if (currentUser) {
        this.userService.setCurrentUser(currentUser);
        this.router.navigate(['home']);
      } else {
        alert('¿plata o plomo extraño?');
      };
    })

  }




}
