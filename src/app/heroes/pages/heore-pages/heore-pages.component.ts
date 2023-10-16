import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heore-pages',
  templateUrl: './heore-pages.component.html',
  styles: [
  ]
})
export class HeorePagesComponent implements OnInit {

  public heroe?:Hero;

  constructor(
    private heroService:HerosService,
    private activateRoute:ActivatedRoute,
    private router:Router
    ){}


  ngOnInit(): void {
    this.activateRoute.params.pipe(
      
      switchMap(({id}) => this.heroService.getHeroById(id))
    ).subscribe(hero=>{
      if (!hero) return this.router.navigate(["heroes/list"]);

      this.heroe = hero
      console.log(hero);
      return;
    })
  }
  goBack(){
    this.router.navigateByUrl('heroes')
  }
}
