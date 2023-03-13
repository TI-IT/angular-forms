import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-reactive-forms-module',
  templateUrl: './form-reactive-forms-module.component.html',
  styleUrls: ['./form-reactive-forms-module.component.scss']
})
export class FormReactiveFormsModuleComponent {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('Tigran'),
    age: new FormControl('', Validators.required),
    profession: new FormControl('',[Validators.required,  Validators.pattern(/^[0-9]+$/)]),
  })

  submitForm() {
    console.log(this.myForm.value)
    console.log(this.myForm.status)
    //Очистить форму
    // form.reset()
  }
}
