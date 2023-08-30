import { Component } from '@angular/core';
import { CountryService } from '../../services/contries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region: Country[]=[];

  constructor(private countryService: CountryService){}

  searchByRegion(region:string){
    this.countryService.searchByRegion(region).subscribe(res=>{
      this.region = res;
    })
  }

}
