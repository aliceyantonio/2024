import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent {

  constructor(public userService: UserService
  ) { }
}
