import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

 public menuitems: MenuItem[] = [];

    ngOnInit() {
        this.menuitems = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }

}
