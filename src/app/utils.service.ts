import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  userRole;
  
  constructor() {
    this.userRole = localStorage.getItem('userRole');
  }
}
