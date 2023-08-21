import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-pages.component.html'
})

export class MainPagesComponent  {


    public character:Character[]=[
        {
            name:"Goku",
            power:9500
        },
        {
            name:"Krilin",
            power:1000
        }
    ]

    onNewCharacter(character:Character):void{
        console.log("Page");
        console.log(character);
    }
} 