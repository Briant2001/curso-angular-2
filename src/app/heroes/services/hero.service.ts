import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HerosService {

    private baseURL:string = environments.baserURL
    constructor(private httpClient: HttpClient) { }

    getHeros():Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`http://localhost:3000/heroes`)
    }


    getHeroById(id:string):Observable<Hero  | undefined>{

        return this.httpClient.get<Hero>(`${this.baseURL}/heroes/${id}`).pipe(
            catchError(erroe => of(undefined))
        )
    }

    getSuggestion(query:string):Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseURL}/heroes?q=${query}&_limit=6`)
    }

    addHero(hero:Hero):Observable<Hero>{
        return this.httpClient.post<Hero>(`${this.baseURL}/heroes`,hero)
    }

    updateHero(hero:Hero):Observable<Hero>{
        if (!hero.id) {
            throw new Error("ID is required");
            
        }
        return this.httpClient.patch<Hero>(`${this.baseURL}/heroes/${hero.id}`,hero)
    }


    deleteHero(id:string):Observable<Boolean>{
        return this.httpClient.delete<Boolean>(`${this.baseURL}/heroes/${id}`).pipe(
            map(res=> true),
            catchError(err => of(false)),
        )
    }
    
}