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
                label: 'Pipes of Angular',
                icon: 'pi pi-home',
                items:[
                    {
                        label:'text and Date',
                        icon: 'pi pi-align-left'
                    },
                    {
                        label: 'number',
                        icon:'pi pi-dollar'
                    },
                    {
                        label: 'No Comunes',
                        icon:'pi pi-globe'
                    }
                ]
            },{
                label: ' Pipes Personalidos',
                icon: 'pi pi-cog',
                items:[
                    {
                        label:'Otro elemento',
                        icon: 'pi pi-cog',
                        items:[
                            {
                                label:'text and Date',
                                icon: 'pi pi-align-left'
                            },
                        ]
                    }
                ]
            }
        ];
    }

}
