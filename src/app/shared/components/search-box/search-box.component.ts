import { Component, Input, Output, EventEmitter, OnInit,OnDestroy } from '@angular/core';
import {Subject,debounceTime,Subscription} from "rxjs"


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{



  private debouncer: Subject<string> = new  Subject();
  private debouncerSubscription?: Subscription;

  @Input() placeHolder: string ="";
  @Input() initialSearch: string="";
  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(500)
      )
      .subscribe(e=>{
        this.onDebounce.emit(e)
      })
    }

    ngOnDestroy(): void {
      this.debouncerSubscription?.unsubscribe();
    }
    emitEvent(term:string):void{
      this.onValue.emit(term)
    }

  onkeyPress(searhItem:string){
    this.debouncer.next(searhItem)
  }



}
