import { Component } from '@angular/core';
import { GifsService } from '../../services/gift.service';
import { Gif } from '../../IGisf.interface';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-pages.component.html',
})
export class HomePagesComponent {
  constructor(private gifService: GifsService){

  }

  get gifs():Gif[]{
    return this.gifService.giftsList;
  }
}
