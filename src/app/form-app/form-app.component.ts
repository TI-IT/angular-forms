import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.scss']
})
export class FormAppComponent {

  itemsTitles = [
    'Category',
    'Items',
    'Gl Code',
    'Amount',
    'Sales Tax',
    'Total'
  ];

  localItems = [
    {
      id: 1,
      name: '',
      items: [{
        id: 1,
        name: '',
        glCode: null,
        amount: null,
        salesTax: null,
      }]
    }
  ];

  submitForm(myForm: NgForm) {
    console.log(myForm.value)
  }
}
