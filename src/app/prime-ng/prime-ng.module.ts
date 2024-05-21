import { NgModule } from '@angular/core';

// importaciones de PrimeNg
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';



@NgModule({
 exports:[
//   MenuModule,
  MenubarModule,
  ButtonModule,
  CardModule,
  FieldsetModule,
  PanelModule,
  ToolbarModule,
  SplitButtonModule
 ]
})
export class PrimeNGModule { }
