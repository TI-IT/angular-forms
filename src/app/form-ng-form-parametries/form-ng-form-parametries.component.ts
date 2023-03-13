import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-ng-form-parametries',
  templateUrl: './form-ng-form-parametries.component.html',
  styleUrls: ['./form-ng-form-parametries.component.scss']
})
export class FormNgFormParametriesComponent {
  submitForm(form: NgForm){
    console.log(form.value.name)
    console.log(form.value.age)
    //Очистить форму
    // form.reset()
  }
}
