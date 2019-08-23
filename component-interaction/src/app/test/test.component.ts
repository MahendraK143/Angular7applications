import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
          <h1>Hello {{parentData}}</h1>
          <h1>Hello {{parentData | uppercase}}</h1>
          <h1>{{parentData | titlecase}}</h1>
          <h1>{{parentData | slice:6:11}}</h1>
          <h1>{{person | json }}</h1>
          <h1>{{5.678 | number:'1.2-3'}}</h1>
          <h1>{{5.678 | number:'3.4-5'}}</h1>
          <h1>{{5.678 | number:'3.2-2'}}</h1>

          <h1>{{5.678 | percent}}</h1>
          <h1>{{5.678 | currency}}</h1>
          <h1>{{5.678 | currency:'GBP'}}</h1>
          <h1>{{5.678 | currency:'USD'}}</h1>
          <h1>{{5.678 | currency:'EUR'}}</h1>
          <h1>{{5.678 | currency: 'EUR' : 'code' }}</h1>

          <h1>{{date}}</h1>
          <h1>{{date | date: 'short'}}</h1>
          <button (click)="fireEvent()">Fire Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  public person = {
    "name" : "Mahendra.Kola",
    "address" : "Bangalore"
  }
  fireEvent(){
    this.childEvent.emit("Hi im coming from child even!!!");
  }
  constructor() { }

  ngOnInit() {
  }

}
