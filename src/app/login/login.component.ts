import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  familyPassword = 'AA15062024'
  friendsPassword = 'AA08062024'

  password: any;

  constructor(
    private router: Router
  ) {

  }

  login() {
    if (this.password === this.familyPassword) {
      localStorage.setItem('userRole', 'family');
      this.router.navigate(['home']);
    } else if (this.password === this.friendsPassword) {
      localStorage.setItem('userRole', 'friends')
      this.router.navigate(['home']);
    } else {
      alert('¿plata o plomo extraño?')
    }
  }

}
