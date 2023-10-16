import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, delay } from 'rxjs';

@Component({
  selector: 'app-searh-pages',
  templateUrl: './searh-pages.component.html',
  styles: [
  ]
})
export class SearhPagesComponent implements OnInit {

  public searchInput = new FormControl('');

  public heroes:Hero[]=[];
  public selectedHero?:Hero;

  constructor(private heroService:HerosService){}
  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(3000)

    ).subscribe(value=>{
      console.log(value);
    })
  }

  searchHero(){
    
    const value:string = this.searchInput.value || '';
    this.heroService.getSuggestion(value).subscribe(heroes=> {
      this.heroes = heroes
    })

  }

  onSelectedOption(value:MatAutocompleteSelectedEvent){
    if(!value.option.value){
      this.selectedHero = undefined
    }

    const hero:Hero = value.option.value;
    this.searchInput.setValue(hero.superhero)
    this.selectedHero = hero;

  } 

}
