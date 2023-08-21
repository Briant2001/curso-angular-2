import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name :string = "Iroman";
    public age :number = 45;

    get capitalizedName():string{
      return this.name.toUpperCase();
    }

    getHeroesDescription():string{
      return `${this.name} - ${this.age}`
      
    }

    changeHero():void{

      this.name = "Spidermen";

    }

    
    changeAge():void{

      this.age = 23;

    }

    resetForm(){
      //Todo:
      this.name = "Iroman";
      this.age = 45;

      
    }

}
