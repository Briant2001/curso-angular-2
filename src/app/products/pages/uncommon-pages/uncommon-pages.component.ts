import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';
@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.css']
})
export class UncommonPagesComponent {

  //i18n Select
  public name: string = "Briant";
  public gender: 'male' | 'female' = "male";
  public invitarloMap = {
    male: "invitarlo",
    female: "invitarla"
  }
  changeClient() {
    this.name = "Melisa" 
    this.gender = "female"
  }

  //i18n plural
  public cliente: string[] = [
    "Maria", "Perdo", "Briant", "Danya", "Brenda", "Melisa", "Ana", "Lilia"
  ]
  public clientsMap = {
    "=0": "no tenemos clientes esperando.",
    "=1": "tenemos 1 cliente esperando.",
    "other": "tenemos # clientes esperando.",
  }

  deleteClient() {
    this.cliente.pop()
  }


  //KeyValePipe

  public person = { 
    name:"Briant",
    age:21,
    address:"Ottawa, Morelita"
  }

  //Async pipe
  public myObservable = interval(2000).pipe(
    tap(value => console.log("tap", value))
  )

  public promise:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Tenemos data en la promesa")
    },3500)
  })
  


}
