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
  selectedWedding: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.selectedWedding = localStorage.getItem('selectedWedding')!;
  }

  setCurrentUser(currentUser: User) {
    this.currentUser = currentUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  getCurrentUser(): User {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    return this.currentUser;
  }

  setSelectedWedding(selectedWedding: string) {
    this.selectedWedding = selectedWedding;
    localStorage.setItem('selectedWedding', selectedWedding);
  }

  getSelectedWedding(): string {
    this.selectedWedding = localStorage.getItem('selectedWedding')!;
    return this.selectedWedding;
  }

  getUsers(): Observable<any> {
    return of(users);
  }
}
