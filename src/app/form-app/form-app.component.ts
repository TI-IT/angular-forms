import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

interface IsalesTaxArray {
  id: number,
  title: string,
  value: number
}

interface Iitems {
  id: number,
  name: string,
  glCode: number,
  amount: number,
  salesTax: IsalesTaxArray
}

interface IlocalItems {
  id: number,
  name: string,
  items: Iitems[]
}


@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.scss']
})
export class FormAppComponent {

  totalAmount: number = 0;
  totalTaxes: number = 0;

  itemsTitles = [
    'Category',
    'Items',
    'Gl Code',
    'Amount',
    'Sales Tax',
    'Total'
  ];

  localItems: IlocalItems[] = [
    {
      id: 1,
      name: '',
      items: [{
        id: 1,
        name: 'Item 1',
        glCode: 0,
        amount: 0,
        salesTax: {id: 0, title: '', value: 0}
      }]
    }
  ];

  salesTaxArray: IsalesTaxArray[] = [
    {id: 1, title: 'No tax', value: 0},
    {id: 2, title: 'NY', value: 10},
    {id: 3, title: 'Russia', value: 20},
  ];

  ngOnInit() {
    this.localItems[0].items[0].salesTax = this.salesTaxArray[0];
  }

  submitForm(myForm: NgForm) {
    // console.log(myForm.value)
  }

  addCategory() {
    this.localItems.push(
      {
        id: -(new Date().getTime()),
        name: '',
        items: [{
          id:  -(new Date().getTime()),
          name: 'Item',
          glCode: 0,
          amount: 0,
          salesTax: {id: 0, title: '', value: 0}
        }]
      })
  }

  removeCategory(id: number) {
    const idx = this.localItems.findIndex((item) => item.id === id)
    if(idx !== -1) {
      this.localItems.splice(idx, 1)
    }
  }

  addItemToCategory(id: number){
    this.localItems.find((item) =>{
      if(item.id === id){
        item.items.push(
          {
            id:  -(new Date().getTime()),
            name: 'Item',
            glCode: 0,
            amount: 0,
            salesTax: {id: 0, title: '', value: 0}
          }
        )
      }
    })
  }

  removeItemFromCategory(catId: number, itemId: number){
    this.localItems.find((item)=>{
      const idx = item['items'].findIndex((item) => item.id === item.id);
      if(idx !== -1){
        item['items'].splice(idx, 1)
      }
    })
  }

}
