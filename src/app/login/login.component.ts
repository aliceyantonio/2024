import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  familyId = 'AA15062024'
  friendsId = 'AA08062024'

  password: any;

  loginForm = this.fb.group({
    username: [''],
    bookingId: ['']
  });


  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private fb: FormBuilder
  ) {

  }

  login() {
    const currentUser = this.users.find(user =>
      user.username === this.loginForm.value.username
      && user.bookingIds.includes(this.loginForm.value.bookingId!)
    );

    if(currentUser){
      this.utilsService.setUserRoles(currentUser.userRoles),
      this.router.navigate(['home']);
    } else {
      alert('¿plata o plomo extraño?');
    }
  }


  users = [
    {
      name: 'rodrigo',
      surname: 'lópez gómez',
      username: 'rolo',
      bookingIds: [this.familyId],
      userRoles: ['family'],
      dependientes: 5
    },
    {
      name: 'rubén',
      surname: 'gonzález román',
      username: 'rugon',
      bookingIds: [this.familyId, this.friendsId],
      userRoles: ['family', 'friend'],
      dependientes: 1
    }
  ]

}
