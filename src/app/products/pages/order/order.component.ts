import {  Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'product-page-order',
  templateUrl:'order.component.html',
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes:Hero[] = [
    {
      name:'superman',
      canFly: true,
      color:Color.blue
    },
    {
      name:'batman',
      canFly: false,
      color:Color.black
    },
    {
      name:'DareDevil',
      canFly: false,
      color:Color.red
    },
    {
      name:'robint',
      canFly: false,
      color:Color.green,
    }
  ]

  toogleUperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }


}
