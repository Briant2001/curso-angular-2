import { Country } from './../interfaces/country.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError,of,map, delay } from "rxjs";
import { CacheStore } from '../interfaces/cache-storage.interface';


@Injectable({providedIn: 'root'})
export class CountryService {

  private apiURL = "https://restcountries.com/v3.1/";
  public cacheStore:CacheStore = {

    byCapital:{term:"",countries:[]},
    byCountries:{term:"",countries:[]},
    byRegion:{term:"",countries:[]},



  }

  constructor(private httpClient: HttpClient) {

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

    searcByCapital(query:string):Observable<Country[]>{
      return this.getCountriesRequest(`${this.apiURL}capital/${query}`)
    }


    searchByCountry(country:string):Observable<Country[]>{
      return this.getCountriesRequest(`${this.apiURL}name/${country}`)
    }

    searchByRegion(region:string):Observable<Country[]>{
      return this.getCountriesRequest(`${this.apiURL}region/${region}`)
    }






}
