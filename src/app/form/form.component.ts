import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  checkInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  onSubmit() {
    // this.utilsService.checkIn(this.checkInForm.value).subscribe(res => {
    //   console.log(res);

    // })

    const submitbtn = document.getElementById('submitbtn')

    submitbtn!.dispatchEvent(new MouseEvent("click", {ctrlKey: true}));

  }

}
