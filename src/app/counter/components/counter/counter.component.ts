import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        {{counter}}
<button class="btn btn-primary" (click)="restar()">-1</button>
<button class="btn btn-primary" (click)="aumentar()">+1</button>
<button class="btn btn-primary" (click)="reset()">Reset</button>
    `,
    standalone:false
})

export class CounterComponent {
    constructor() { }

    counter: number = 10;

    aumentar(): void {
        this.counter++;
    }

    restar(): void {
        this.counter--;
    }

    reset(): void {
        this.counter = 10;
    }

}