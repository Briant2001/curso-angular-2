import { Component } from '@angular/core';
import { CountryService } from '../../services/contries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region: Country[]=[];
  public regions:Region[]=["Africa","Americas","Asia","Europa","Oceania"];
  public selectedRegion?:Region;

  constructor(private countryService: CountryService){}

  searchByRegion(region:Region){
    this.selectedRegion = region;
    this.countryService.searchByRegion(region).subscribe(res=>{
      this.region = res;
    })
  }

}
