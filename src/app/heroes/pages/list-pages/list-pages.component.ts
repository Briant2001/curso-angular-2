import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/hero.service';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styles: [
  ]
})
export class ListPagesComponent implements OnInit{

  public heros:Hero[] = [];
  constructor(private herService:HerosService){}
  
  ngOnInit(): void {
    this.herService.getHeros().subscribe(e=>{
      this.heros = e
    })
  }




}
