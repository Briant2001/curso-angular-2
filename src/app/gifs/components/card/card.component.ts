import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../IGisf.interface';

@Component({
  selector: 'gift-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  ngOnInit(): void {
    if (!this.gifsCard) {
      throw new Error("Gift property is required")
    }
  }

  @Input()
  public gifsCard!: Gif ;
}
