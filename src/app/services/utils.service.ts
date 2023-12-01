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
  }

  swapNodes(node1: any, node2: any) {
    const node2_copy = node2.cloneNode(true);
    node1.parentNode.insertBefore(node2_copy, node1);
    node2.parentNode.insertBefore(node1, node2);
    node2.parentNode.replaceChild(node2, node2_copy);
  }

  randomNumber(min: number, max:number) {
    return (Math.floor(Math.random() * max) + min).toString();
  }
}
