import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { PruebaComponent } from './components/prueba/prueba.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';


@NgModule({
  declarations: [
    MenuComponent,
    PruebaComponent,
    Prueba2Component
  ],
  imports: [
    CommonModule,PrimeNGModule,
  ],
  exports:[MenuComponent,PruebaComponent,Prueba2Component]
})
export class SharedModule { }
