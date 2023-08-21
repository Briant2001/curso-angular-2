import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{counter}}</h3>
        <button (click)="increment()">+1</button>
        <button (click)="decrement()">+2</button>
        <button (click)="reset()">Reset</button>
    `,
})
export class CounterComponent implements OnInit {
    constructor() { }

    ngOnInit() { } 

    public counter: number = 0;

    increment(): void {
        this.counter++;
    }

    decrement(): void {
        this.counter--;
    }

    reset(): void {
        this.counter = 0;
    }
}
