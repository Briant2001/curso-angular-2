import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/countries.interfaces';
import { combineLatest, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _baseURL: string = "https://restcountries.com/v3.1";


  private _regions: Region[] = [Region.Africa,Region.Americas,Region.Asia,Region.Europe,Region.Ocenaia];

  constructor(private http:HttpClient) { }

  get regions():Region[]{
    return [...this._regions]
  }

  getCountriesRegion(region:Region):Observable<SmallCountry[]>{

    if (!region) return of([]);

    const url = `${this._baseURL}/region/${region}?fields=cca3,name,borders`

    return this.http.get<Country[]>( url).pipe(
      map(countries => countries.map(country=>({
          name:country.name.common,
          cca3:country.cca3,
          borders:country.borders ?? []
        }))
      ),
      tap(respons=> console.log({respons}))
    ) ;

  }

  getCountryByAlphaCode(alphaCode:string):Observable<SmallCountry>{
    if (!alphaCode) return of();

    return this.http.get<Country>(`${this._baseURL}/alpha/${alphaCode}?fields=cca3,name,borders`).pipe(
      map(country=> ({
        name:country.name.common,
        cca3:country.cca3,
        borders:country.borders ?? []
      }))
    )
  }


  getCountryByBordersCode(borders:string[]):Observable<SmallCountry[]>{
    if (!borders || borders.length==0) return of([]);

    const countriesRequest:Observable<SmallCountry>[] = [];

    borders.forEach(code => {
      const reques = this.getCountryByAlphaCode(code);
      countriesRequest.push(reques);
    })

    return combineLatest(countriesRequest);


  }


}
