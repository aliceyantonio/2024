import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-travelers',
  templateUrl: './travelers.component.html',
  styleUrls: ['./travelers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TravelersComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    document.getElementById('iDuck')!.style.display = 'none';
    document.getElementById('header')!.classList.add('on-hover');
    document.getElementById('footer')!.classList.add('on-hover');
    document.querySelector('body')!.style.overflow = 'hidden';
    document.querySelector('body')!.style.position = 'relative';
    document.querySelector('html')!.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.getElementById('iDuck')!.style.display = 'initial';
    document.getElementById('header')!.classList.remove('on-hover');
    document.getElementById('footer')!.classList.remove('on-hover');
    document.querySelector('body')!.style.overflow = 'initial';
    document.querySelector('body')!.style.position = 'initial';
    document.querySelector('html')!.style.overflow = 'initial';
  }

}
