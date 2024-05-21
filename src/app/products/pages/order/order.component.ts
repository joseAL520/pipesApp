import {  Component } from '@angular/core';

@Component({
  selector: 'product-page-order',
  templateUrl:'order.component.html',
})
export class OrderComponent {

  public isUpperCase: boolean = false;


  toogleUperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }


}
