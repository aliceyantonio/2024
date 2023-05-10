import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import users from './users'

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
    return of(users);
  }
}
