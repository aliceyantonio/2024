import { UtilsService } from './../services/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  drinksSelected: any;

  drinks = [
    { name: 'Agua', kind: 'Sin Alcohol' },
    { name: 'Zumo', kind: 'Sin Alcohol' },
    { name: 'Refrescos', kind: 'Sin Alcohol' },
    { name: 'Cerveza', kind: 'Fermentados' },
    { name: 'Vino Blanco', kind: 'Fermentados' },
    { name: 'Vino Tinto', kind: 'Fermentados' },
    { name: 'Whisky', kind: 'Duro' },
    { name: 'Ron', kind: 'Duro' },
    { name: 'Ginebra', kind: 'Duro' },
    { name: 'Vodka', kind: 'Duro' },
  ];

}
