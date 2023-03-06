import { UserService } from './../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit, OnDestroy {

  itsTheDay1 = false;
  itsTheDay2 = false;
  interval: any;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    let countDownDate1: any;
    let countDownDate2: any;

    countDownDate1 = new Date("Jun 8, 2024 00:00:00").getTime();
    countDownDate2 = new Date("Jun 15, 2024 00:00:00").getTime();

    this.interval = setInterval(() => {
      var now = new Date().getTime();

      if (this.userService.currentUser.userRoles.includes('family')) {
        var distance1 = countDownDate1 - now;

        var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
        var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

        document.getElementById("days_1")!.innerHTML = days1.toString();
        document.getElementById("hours_1")!.innerHTML = hours1.toString();
        document.getElementById("minutes_1")!.innerHTML = minutes1.toString();
        document.getElementById("seconds_1")!.innerHTML = seconds1.toString();

        if (distance1 < 0) {
          clearInterval(this.interval);
          this.itsTheDay1 = true;
        }
      }

      if (this.userService.currentUser.userRoles.includes('friend')) {
        var distance2 = countDownDate2 - now;
        var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

        document.getElementById("days_2")!.innerHTML = days2.toString();
        document.getElementById("hours_2")!.innerHTML = hours2.toString();
        document.getElementById("minutes_2")!.innerHTML = minutes2.toString();
        document.getElementById("seconds_2")!.innerHTML = seconds2.toString();

        if (distance2 < 0) {
          clearInterval(this.interval);
          this.itsTheDay2 = true;
        }
      }
    }, 1000);

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
