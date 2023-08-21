import { Injectable } from '@angular/core';
import {v4 as uuid} from"uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DBZService {

  public character:Character[]=[
    {
        id:uuid(),
        name:"Goku",
        power:9500
    },
    {
      id:uuid(),
        name:"Krilin",
        power:1000
    },
]

addCharacter(character:Character):void{
  const newCharacter:Character = {
    id:uuid(),
    ...character
  }
    this.character.push(newCharacter)
}

onDelete(id:string):void{
  const characterFillter = this.character.filter(charater => charater.id !== id)
  console.log(characterFillter)

  this.character = characterFillter;

  // this.character.splice(id,1)
}

}
