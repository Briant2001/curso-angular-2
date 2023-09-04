import { Component } from '@angular/core';
import { CountryService } from '../../services/contries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public country:Country[]=[];
  public isLoading: boolean=false;


  constructor(private countrService:CountryService){

  }


  searchByCapital(term:string):void{
    this.isLoading=true;
     this.countrService.searcByCapital(term).subscribe(res=>{
      this.country=res;
      this.isLoading=false;

     })
  }
}
