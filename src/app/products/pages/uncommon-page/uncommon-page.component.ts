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


  // i18Plurl
  public clients: string[] = ["Alejandro", "Beatriz", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel", "Hilda", "Ignacio", "Julia"]
  public clientsMap = {
    '=0': 'No hay clientes',
    '=1':'tenemos un Clinte esperando',
    'other':'tenemos # clientes esperando'

  }
  deleteClient(){
    this.clients.shift();
  }


  //keyvalue
   public persona = {
    name:'jose',
    age:24,
    address:'Ottawa, canada'
   }

}
