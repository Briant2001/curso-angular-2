import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: [
  ]
})
export class NewPagesComponent {

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('',{nonNullable:true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    firts_appearance: new FormControl(''),
    characters :new FormControl(''),
    alt_image:new FormControl('')
  })

  public publishers=[
    {id:'DC Comics', desc:' DC - Comics'},
    {id:'Marvel Comics', desc:' Marvel - Comics'},
  ];

  onSubmit(){
    console.log({
      formsIsValid:this.heroForm.valid,
      value:this.heroForm.value,
    });
  }
}
