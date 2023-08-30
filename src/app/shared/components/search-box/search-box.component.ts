import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input() placeHolder: string ="";
  @Output() onValue = new EventEmitter<string>();


  emitEvent(term:string):void{
    this.onValue.emit(term)
  }


}
