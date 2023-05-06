import { UtilsService } from '../services/utils.service';
import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GuestsComponent implements OnInit, OnDestroy {

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    document.getElementById('iDuck')!.style.display = 'none';
    document.getElementById('header')!.classList.add('on-hover');
    document.getElementById('footer')!.classList.add('on-hover');
    document.querySelector('body')!.style.overflow = 'hidden';
    document.querySelector('body')!.style.position = 'relative';
    document.querySelector('body')!.style.backgroundColor = '#0d453f';
    document.querySelector('main')!.style.backgroundColor = 'initial';
    document.querySelector('html')!.style.overflow = 'hidden';

    this.utilsService.swapNodes(document.getElementById(this.utilsService.randomNumber(1, 5)), document.getElementById(this.utilsService.randomNumber(1, 5)))
    this.utilsService.swapNodes(document.getElementById(this.utilsService.randomNumber(1, 5)), document.getElementById(this.utilsService.randomNumber(1, 5)))
  }

  ngOnDestroy(): void {
    document.getElementById('iDuck')!.style.display = 'initial';
    document.getElementById('header')!.classList.remove('on-hover');
    document.getElementById('footer')!.classList.remove('on-hover');
    document.querySelector('body')!.style.overflow = 'initial';
    document.querySelector('body')!.style.position = 'initial';
    document.querySelector('body')!.style.backgroundColor = '#0d453f';
    document.querySelector('main')!.style.backgroundColor = '#0d453f';
    document.querySelector('html')!.style.overflow = 'initial';
  }

}
