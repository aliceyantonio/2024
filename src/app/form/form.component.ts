import { UtilsService } from './../services/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  checkInForm: FormGroup = this.fb.group({
    nombre: [''],
    apellido: [''],
    email: [''],
    telefono: [''],
    menu: [''],
    bebida: [''],
    alergia: [''],
    transporte: [''],
    alojamiento: [''],
    otros: [''],
  });

  constructor(
    private fb: FormBuilder,
    private utilsService: UtilsService
  ) { }

  onSubmit() {
    this.utilsService.checkIn(this.checkInForm.value).subscribe(res => {
      console.log(res);

    })

    // const submitbtn = document.getElementById('submitbtn')

    // submitbtn!.dispatchEvent(new MouseEvent("click", {ctrlKey: true}));

  }
}
