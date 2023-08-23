import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { Gif } from '../../IGisf.interface';
import * as THREE from "three"

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];

}
