import { Component,ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-view-child',
  templateUrl: './form-view-child.component.html',
  styleUrls: ['./form-view-child.component.scss']
})
export class FormViewChildComponent {
  @ViewChild('myForm') formMy!: NgForm
  submitForm(){
    console.log(this.formMy.value.name)
    console.log(this.formMy.value.age)
    //Очистить форму
    // form.reset()
  }
}
