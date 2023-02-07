import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  userRoles: string[];

  constructor() {
    this.userRoles = JSON.parse(localStorage.getItem('userRoles')!);
  }

  setUserRoles(userRoles: string[]) {
    this.userRoles = userRoles;
    localStorage.setItem('userRoles', userRoles.toString());
  }

  getUserRoles() {
    this.userRoles = JSON.parse(localStorage.getItem('userRoles')!);
  }
}
