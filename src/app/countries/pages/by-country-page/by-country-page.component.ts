import { Component } from '@angular/core';
import { CountryService } from '../../services/contries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  constructor(private countryService:CountryService){}
  public country:Country[]=[]

  searchByCountry(country:string){
    this.countryService.searchByCountry(country).subscribe(res=>{
      this.country = res;
    })
  }

}
