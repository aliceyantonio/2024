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
    let body = new FormData();
    body.append('nombre', data.nombre);
    body.append('apellido', data.apellido);
    body.append('email', data.email);
    body.append('telefono', data.telefono);
    body.append('menu', data.menu);
    body.append('bebida', data.bebida);
    body.append('alergia', data.alergia);
    body.append('transporte', data.transporte);
    body.append('alojamiento', data.alojamiento);
    body.append('otros', data.otros);
    return this.httpClient.post('https://script.google.com/macros/s/AKfycbyX6kzYOpLEKSFs2t37ajilEp3ONZMGgym-epjG6rpojL8s9bXkgzJjCYKSgd8JR0rN/exec', body)
  }
}
