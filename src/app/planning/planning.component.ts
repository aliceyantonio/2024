import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit, OnDestroy {

  itsTheDay = false;
  interval: any;

  ngOnInit(): void {
    const countDownDate = new Date("Jun 8, 2024 00:00:00").getTime();

    this.interval = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days")!.innerHTML = days.toString();
      document.getElementById("hours")!.innerHTML = hours.toString();
      document.getElementById("minutes")!.innerHTML = minutes.toString();
      document.getElementById("seconds")!.innerHTML = seconds.toString();

      if (distance < 0) {
        clearInterval(this.interval);
        this.itsTheDay = true;
      }
    }, 1000);

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }



}
