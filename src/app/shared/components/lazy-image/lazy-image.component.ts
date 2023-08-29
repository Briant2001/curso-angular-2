import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{
  ngOnInit(): void {
    if (!this.url) {
      throw new Error("URL property is requerid");
    }
  }
  onLoad(){
    console.log("Image Loaded");
    this.hasLoader=true
  }
  public hasLoader:boolean=false
  @Input()
  public url :string="nada"
  @Input()
  public alt! :string
}
