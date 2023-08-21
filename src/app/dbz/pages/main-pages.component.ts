import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-pages.component.html'
})

export class MainPagesComponent  {

  constructor(private dbz:DBZService){

  }


  get charater():Character[]{
    return [...this.dbz.character];
  }

  onDeleteCharacter(id:string):void{
    this.dbz.onDelete(id)

  }

  onNewCharacter(character:Character){
    this.dbz.addCharacter(character)
  }
}
