import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  constructor ( private primengConfing: PrimeNGConfig) {}


  ngOnInit() {
    this.primengConfing.ripple = true;
}

}
