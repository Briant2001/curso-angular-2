import { Component,ViewChild,ElementRef } from '@angular/core';
import { GifsService } from '../../services/gift.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <input type="text" class="form-control" placeholder="Buscar Gifs"
  (keyup.enter)="searchTag()"
  #txtTagInput
  >`
})

export class SearchBoxComponent {


  @ViewChild("txtTagInput")
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){

  }
  // searchTag(newTag:string):void{
  //   console.log(newTag)
  // }

  searchTag():void{
    const newtTag = this.tagInput.nativeElement.value;
    this.gifsService.serachTag(newtTag);
    this.tagInput.nativeElement.value="";
    console.log(newtTag)
  }
}
