import { UserService } from './services/user.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '2024';
  isNotLogin: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {

    console.log(4);

    this.userService.getCurrentUser();

    // ocultamos el chatbot
    document.getElementById('iDuck')!.style.display = 'none';

    // revisamos cuando cambia de ruta
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.isNotLogin = !event.urlAfterRedirects.includes('login')
      // si en el cambio de ruta no va a login y no ha seteados los estilos de chat los setea
      if (this.isNotLogin) {
        document.getElementById('iDuck')!.style.display = 'initial';
      }
    })
  }

}
