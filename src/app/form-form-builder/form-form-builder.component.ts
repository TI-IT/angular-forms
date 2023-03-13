import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-form-builder',
  templateUrl: './form-form-builder.component.html',
  styleUrls: ['./form-form-builder.component.scss']
})
export class FormFormBuilderComponent {
  myForm!: FormGroup;
  constructor(private FormBuilder: FormBuilder) {
    this.myForm = this.FormBuilder.group({
      name: ['Tiiii'],
      age: [''],
      profession: ['']
    })
  }

  submitForm() {
    console.log(this.myForm.value)
    //Очистить форму
    // form.reset()
  }
}
