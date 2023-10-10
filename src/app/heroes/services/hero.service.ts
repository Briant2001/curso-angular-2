import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HerosService {

    private baseURL:string = environments.baserURL
    constructor(private httpClient: HttpClient) { }

    getHeros():Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`http://localhost:3000/heroes`)
    }
    
}