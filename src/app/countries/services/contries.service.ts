import { Country } from './../interfaces/country.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError,of,map } from "rxjs";


@Injectable({providedIn: 'root'})
export class CountryService {
  private apiURL = "https://restcountries.com/v3.1/";

  constructor(private httpClient: HttpClient) { }

  searhCountryByAlphaCod(code:string):Observable<Country|null>{
    return this.httpClient.get<Country[]>(`${this.apiURL}alpha/${code}`).pipe(
      map(country=>country.length > 0 ? country[0]: null),
      catchError(error=>{
        console.log(error)
        return of(null)})
    )
  }

    searcByCapital(query:string):Observable<Country[]>{
      return this.httpClient.get<Country[]>(`${this.apiURL}capital/${query}`).pipe(
        catchError(error=>{
          console.log(error)
          return of([])})
      )
    }


    searchByCountry(country:string):Observable<Country[]>{
      return this.httpClient.get<Country[]>(`${this.apiURL}name/${country}`)
      .pipe(
        catchError(()=>of([]))
      )
    }

    searchByRegion(region:string):Observable<Country[]>{
      return this.httpClient.get<Country[]>(`${this.apiURL}region/${region}`)
      .pipe(
        catchError(()=>of([]))
      )
    }






}
