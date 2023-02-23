import { UtilsService } from './../utils.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent {

  constructor(
    public utilsService: UtilsService
  ) { }

}
