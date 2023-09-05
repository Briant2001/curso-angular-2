import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/contries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  public country:Country[]=[];
  public isLoading: boolean=false;
  public initialSearch = "";


  constructor(private countrService:CountryService){

  }
  ngOnInit(): void {
    this.country=this.countrService.cacheStore.byCapital.countries
    this.initialSearch= this.countrService.cacheStore.byCapital.term
  }


  searchByCapital(term:string):void{
    this.isLoading=true;
     this.countrService.searcByCapital(term).subscribe(res=>{
      this.country=res;
      this.isLoading=false;

     })
  }
}
