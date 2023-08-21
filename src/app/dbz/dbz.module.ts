import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"

import { MainPagesComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [

    MainPagesComponent,
    ListComponent,
    CharacterComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPagesComponent
  ]
})
export class DbzModule { }
