import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gift.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsServices : GifsService){}

  get gifsService():string[]{
    return this.gifsServices.tagsHistory;
  }

}


