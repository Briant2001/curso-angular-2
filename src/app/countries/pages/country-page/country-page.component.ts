import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/contries.service';
import { pipe,switchMap,tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

    constructor(private activateRouteservbice:ActivatedRoute, private countryService:CountryService,
        private route : Router
      ){}
  ngOnInit(): void {
    this.activateRouteservbice.params.
    pipe(
      switchMap(({id})=>this.countryService.searhCountryByAlphaCod(id))
    )
    .subscribe((res)=>{
      if(!res){
        return this.route.navigateByUrl("")
      }
      this.country = res;
      return
    })
  }



}
