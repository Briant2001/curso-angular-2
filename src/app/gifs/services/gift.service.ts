import { Gif, SearchResponse } from './../IGisf.interface';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  public giftsList :Gif[] = [];

  private _tagHistory:string[]=[]
  private apikey:string="pvfszyCpuveEu0AJjGdymyneLG7ujHgf";
  private serviceURL : string ="http://api.giphy.com/v1/gifs/";
  constructor(private http: HttpClient) { }

  get tagsHistory(){
    return [...this._tagHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagHistory.includes(tag))
    {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !==tag );
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10)

  }

  // async serachTag(tag:string):Promise<void> {
  async serachTag(tag:string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
    .set("api_key",this.apikey)
    .set("limit",10)
    .set("q",tag)

    this.http.get<SearchResponse>(`${this.serviceURL}search`,{params})
      .subscribe(res=>{
        this.giftsList = res.data;
        console.log({gif: this.giftsList})
      })
    // fetch("http://api.giphy.com/v1/gifs/search?api_key=pvfszyCpuveEu0AJjGdymyneLG7ujHgf&q=valorant&limit=10")
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }



}
