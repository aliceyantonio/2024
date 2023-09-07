import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
import { loadFull } from 'tsparticles';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: any;
  showError = false;

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    bookingId: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    document.getElementById('loginComponent')!.addEventListener("click", function () {
      var el = document.documentElement
      el.requestFullscreen();
    });
  }

  login() {
    localStorage.clear();

    this.userService.getUsers().subscribe(res => {
      const currentUser = res.find((user: User) =>
        user.username === this.loginForm.value.username
        && user.bookingIds.includes(this.loginForm.value.bookingId!)
      );

      if (currentUser) {
        this.userService.setCurrentUser(currentUser);
        this.router.navigate(['home']);
      } else {
        this.showError = true
      };
    })

  }


  id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: "#0d453f",
      },
    },
    fpsLimit: 120,
    // interactivity: {
    //   events: {
    //     onClick: {
    //       enable: true,
    //       mode: ClickMode.push,
    //     },
    //     onHover: {
    //       enable: true,
    //       mode: HoverMode.repulse,
    //     },
    //     resize: true,
    //   },
    //   modes: {
    //     push: {
    //       quantity: 4,
    //     },
    //     repulse: {
    //       distance: 200,
    //       duration: 0.4,
    //     },
    //   },
    // },
    particles: {
      color: {
        value: "#ffffff",
      },
      // links: {
      //   color: "#ffffff",
      //   distance: 150,
      //   enable: true,
      //   opacity: 0.5,
      //   width: 1,
      // },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: any): void {
    // console.log(container);
  }

  async particlesInit(engine: any): Promise<void> {
    await loadFull(engine);
  }

}
