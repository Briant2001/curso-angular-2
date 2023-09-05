import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/contries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{
  constructor(private countryService:CountryService){}

  public country:Country[]=[];
  public initialSearch:string= ""

  searchByCountry(country:string){
    this.countryService.searchByCountry(country).subscribe(res=>{
      this.country = res;
    })
  }

  ngOnInit(): void {
    this.country = this.countryService.cacheStore.byCountries.countries;
    this.initialSearch = this.countryService.cacheStore.byCountries.term;
  }

}
