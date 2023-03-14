import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import gsap from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  section1Animated = false;
  section2Animated = false;
  section3Animated = false;
  section4Animated = false;
  section5Animated = false;
  section6Animated = false;
  tl = gsap.timeline();

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    document.getElementById('iDuck')!.style.display = 'initial';

    this.tl
      .from(".s1 .text-anim", { y: -50, opacity: 0, stagger: 0.4 })
      .to(".s1 .section-image",
        {
          backgroundPosition: "0", opacity: 0.4, onComplete: function () {
            (document.querySelector('.s1 .section-image') as HTMLElement).classList.add('animationCompleted'); // then only replace with blue div with new height and width
          }
        });


    // document.querySelector(".btn")!.addEventListener("click", () => {
    //   tl.reversed() ? tl.play() : tl.reverse();
    // });

  }

  startTrip() {
    document.querySelector(".sections-container")!.scrollIntoView();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset > (document.querySelectorAll('.section')[1]! as HTMLElement).offsetTop - 500) && !this.section2Animated) {
      console.log('aqui 2');
      this.section2Animated = true
      this.tl
        .from(".s2 .text-anim", { y: -50, opacity: 0, stagger: 0.4 })
        .to(".s2 .section-image",
          {
            backgroundPosition: "0", opacity: 0.4, onComplete: function () {
              (document.querySelector('.s2 .section-image') as HTMLElement).classList.add('animationCompleted'); // then only replace with blue div with new height and width
            }
          });
    } else if ((window.pageYOffset > (document.querySelectorAll('.section')[2]! as HTMLElement).offsetTop - 500) && !this.section3Animated) {
      console.log('aqui 3');
      this.section3Animated = true
      this.tl
        .from(".s3 .text-anim", { y: -50, opacity: 0, stagger: 0.4 })
        .to(".s3 .section-image", {
          backgroundPosition: "0", opacity: 0.4, onComplete: function () {
            (document.querySelector('.s3 .section-image') as HTMLElement).classList.add('animationCompleted'); // then only replace with blue div with new height and width
          }
        });
    } else if ((window.pageYOffset > (document.querySelectorAll('.section')[3]! as HTMLElement).offsetTop - 500) && !this.section4Animated) {
      console.log('aqui 4');
      this.section4Animated = true
      this.tl
        .from(".s4 .text-anim", { y: -50, opacity: 0, stagger: 0.4 })
        .to(".s4 .section-image", {
          backgroundPosition: "0", opacity: 0.4, onComplete: function () {
            (document.querySelector('.s4 .section-image') as HTMLElement).classList.add('animationCompleted'); // then only replace with blue div with new height and width
          }
        });
    } else if ((window.pageYOffset > (document.querySelectorAll('.section')[4]! as HTMLElement).offsetTop - 500) && !this.section5Animated) {
      console.log('aqui 5');
      this.section5Animated = true
      this.tl
        .from(".s5 .text-anim", { y: -50, opacity: 0, stagger: 0.4 })
        .to(".s5 .section-image", {
          backgroundPosition: "0", opacity: 0.4, onComplete: function () {
            (document.querySelector('.s5 .section-image') as HTMLElement).classList.add('animationCompleted'); // then only replace with blue div with new height and width
          }
        });
    } else if ((window.pageYOffset > (document.querySelectorAll('.section')[5]! as HTMLElement).offsetTop - 500) && !this.section6Animated) {
      console.log('aqui 6');
      this.section6Animated = true
      this.tl
        .from(".s6 .text-anim", { y: -50, opacity: 0, stagger: 0.4 })
        .to(".s6 .section-image", {
          backgroundPosition: "0", opacity: 0.4, onComplete: function () {
            (document.querySelector('.s6 .section-image') as HTMLElement).classList.add('animationCompleted'); // then only replace with blue div with new height and width
          }
        });
    }
  }

}
