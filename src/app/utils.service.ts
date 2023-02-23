import { Router } from '@angular/router';
import { User } from './models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  // userRoles: string[];
  currentUser: User;

  constructor(
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  }

  setCurrentUser(currentUser: User) {
    this.currentUser = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  getCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  familyId = 'AA15062024';
  friendsId = 'AA08062024';

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
  ];
}
