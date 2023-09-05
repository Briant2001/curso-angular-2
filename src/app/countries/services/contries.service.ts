import { Country } from './../interfaces/country.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError,of,map, delay, tap } from "rxjs";
import { CacheStore } from '../interfaces/cache-storage.interface';
import { Region } from '../interfaces/region.type';


@Injectable({providedIn: 'root'})
export class CountryService {

  private apiURL = "https://restcountries.com/v3.1/";
  public cacheStore:CacheStore = {

    byCapital:{term:"",countries:[]},
    byCountries:{term:"",countries:[]},
    byRegion:{term:"",countries:[]},
  }

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage()
  }

  private saveToLocalStorage() {
    localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))
  }
  private loadFromLocalStorage() {
    if (!localStorage.getItem("cacheStore")) {
      return;
    }
    this.cacheStore = JSON.parse(localStorage.getItem("cacheStore")!)
  }

  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url).pipe(
      catchError(error=>{
        console.log(error)

        return of([])}
        ),
       // delay(2000)
    )
  }
  searhCountryByAlphaCod(code:string):Observable<Country|null>{
    return this.httpClient.get<Country[]>(`${this.apiURL}alpha/${code}`).pipe(
      map(country=>country.length > 0 ? country[0]: null),
      catchError(error=>{
        console.log(error)
        return of(null)})
    )
  }

    searcByCapital(term:string):Observable<Country[]>{
      return this.getCountriesRequest(`${this.apiURL}capital/${term}`).pipe(
        tap( countries => this.cacheStore.byCapital = {term,countries} ),
        tap(() => this.saveToLocalStorage())
      )
    }


    searchByCountry(term:string):Observable<Country[]>{
      return this.getCountriesRequest(`${this.apiURL}name/${term}`).pipe(
        tap( countries => this.cacheStore.byCountries = {term,countries} ),
        tap(() => this.saveToLocalStorage())
      )
    }

    searchByRegion(term:Region):Observable<Country[]>{
      return this.getCountriesRequest(`${this.apiURL}region/${term}`).pipe(
        tap( countries => this.cacheStore.byRegion = {term,countries} ),
        tap(() => this.saveToLocalStorage())
      )
    }






}
