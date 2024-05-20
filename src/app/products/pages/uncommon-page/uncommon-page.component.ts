import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  // i18 select
  public name:string = 'jose';
  public gender: 'male' | 'female' = 'male';

  public invitarloMap = { 
    male: 'invitarlo',
    female: 'invitarla'
  }



  changeClient(){
    this.name = 'melissa';
    this.gender = 'female';
  }
}
