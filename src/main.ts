/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

if (!localStorage.getItem('currentUser')) {
  document.getElementById('iDuck')!.style.display = 'none';
} else {
  document.getElementById('iDuck')!.style.display = 'initial';
}

