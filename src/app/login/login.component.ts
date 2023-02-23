import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

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
    private fb: FormBuilder
  ) {

  }

  login() {
    localStorage.clear();

    const currentUser = this.utilsService.users.find(user =>
      user.username === this.loginForm.value.username
      && user.bookingIds.includes(this.loginForm.value.bookingId!)
    );

    if (currentUser) {
      this.utilsService.setCurrentUser(currentUser);
      this.router.navigate(['home']);
    } else {
      alert('¿plata o plomo extraño?');
    };
  }




}
