import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  logOut() {
    localStorage.clear();
    document.getElementById('iDuck')!.style.display = 'none';
    this.router.navigate(['login']);
  }

  checkIn(data: any): Observable<any> {
    return this.httpClient.post('https://script.google.com/macros/s/AKfycbxbeFQd5GttLsuzBOgMWwi8FNfhp7li1GtOHlrp6YSkFwoxb45Bx8G5FnxiHywlxeuJ/exec', data)
  }
}
