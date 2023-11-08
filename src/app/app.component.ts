import { UserService } from './services/user.service';
import { NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '2024';
  isLogin: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser();

    // ocultamos el chatbot
    document.getElementById('iDuck')!.style.display = 'none';

    // revisamos cuando ecambia de ruta
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event: any) => {
      this.isLogin = event.url.includes('login')
      // si en el cambio de ruta no va a login y no ha seteados los estilos de chat los setea
      if (!this.isLogin) {
        document.getElementById('iDuck')!.style.display = 'initial';
      }
    })
  }

}
