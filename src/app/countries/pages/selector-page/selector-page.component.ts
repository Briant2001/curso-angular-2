import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/countries.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit{

  public myForms!:FormGroup;

  public countriesbyRegions:SmallCountry[]=[];
  public borders:SmallCountry[]=[];

  constructor(
    private fb:FormBuilder,
    private countriesService:CountriesService){
    this.myForms = fb.group({
      region :['',Validators.required],
      country:['',Validators.required],
      border :['',Validators.required],
    })
  }
  ngOnInit(): void {
    this.onRegionChange();
    this.onBorderChange();

  }

  get regions():Region[]{
    return this.countriesService.regions;
  }

  onRegionChange():void{
    this.myForms.get('region')!.valueChanges
    .pipe(
      tap(()=> this.myForms.get('country')!.setValue("")),
      tap(()=> this.borders = []),
      switchMap(region => this.countriesService.getCountriesRegion(region))
    )
    .subscribe(countri=>{
      this.countriesbyRegions = countri;

    })
  }

  onBorderChange():void{
    this.myForms.get('country')!.valueChanges
    .pipe(
      tap(()=> this.myForms.get('border')!.setValue("")),
      filter((value:string)=> value.length>0),
      switchMap(alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode)),
      switchMap(country => this.countriesService.getCountryByBordersCode(country.borders)),
    )
    .subscribe(countries=>{
      // this.countriesbyRegions = countri;
      console.log({borders:countries})
      this.borders=countries;
    })
  }




}
