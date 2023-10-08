import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {

  public nameLower: string = "briant";
  public nameUpper: string = "BRIANT";
  public fullName: string = "bRIanT mALDOnado";


  public date:Date = new Date()

}
