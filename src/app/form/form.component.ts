import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor() { }

  onSubmit() {
    const submitbtn = document.getElementById('submitbtn')
    submitbtn!.dispatchEvent(new MouseEvent("click", {ctrlKey: true}));
  }

}
