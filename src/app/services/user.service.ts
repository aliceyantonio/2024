import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User;

  constructor(
    private httpClient: HttpClient
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

  getUsers(): Observable<any> {
    return this.httpClient.get<any>('https://getpantry.cloud/apiv1/pantry/c8e72864-500d-4c4f-b94b-ccd85b6e48d3/basket/users')
  }

  setUsers(): Observable<User> {
    return this.httpClient.get<any>('https://json.extendsclass.com/bin/3c3db48fba14')
  }
}
