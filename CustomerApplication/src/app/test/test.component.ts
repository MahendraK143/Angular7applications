import { Component, OnInit } from '@angular/core';
import { isError } from 'util';

@Component({
   

  selector: 'app-test',
  //<h2>{{4+4}}</h2>
  //<h2>{{name.length}}</h2>
  //<h2>{{name.toUpperCase()}}</h2>
  //<h2>{{wish()}}</h2> 
  //<h2>{{site}}</h2>
  //<input type="text" [(ngModule)]="name">{{name}}
  template: `
          <div>
          Welcome To Cognizant {{name}}
          </div>
          <h2 [class]="textSuccess"> Welcome To Cognizant {{name}}</h2>
          <h2 [class.text-danger]="isError"> Welcome To Cognizant {{name}}</h2>
          <h2 [ngClass]="messageClasses"> Style binding {{name}}</h2>
          <h2 [style.color]="isError ? 'red' : 'green'"> Style binding {{name}}</h2>
          <h2 [style.color]="isHilighted"> Style binding {{name}}</h2>
          <h2 [ngStyle]="titleStyle"> Style binding {{name}}</h2>

          <button (click)=onClick($event);>Click on me</button>
          <button (click)="greetingThing='Welcome Mahendra!'">Click on me</button>
          {{greetingThing}}<br>
          <input [id]="myId" type="text" value="Mahendra" name="name"> <br>
          <input disabled="{{false}}" id={{myId}} type="text" value="here interpolation is not working, that the resean we r moving to property binding" name="name"><br>
          <input [disabled]="true" id={{myId}} type="text" value="Mahendra" name="name"><br>
          <input bind-disabled="true" id={{myId}} type="text" value="Mahendra" name="name"><br>
          ============================================================================================
          <br>
          <input #myInput type="text">
          <button (click)="logMessage(myInput.value)">GetValue</button>
          <input type="text" [(ngModel)]="name1">{{name1}}
          `,
  styles: [`
    div {
      color:red;
    }
    .text-success{
      color : green;
    }
    .text-danger{
      color : red;
    }
    .text-special{
      font-style : italian;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Mahendra Kola ";
  public site = window.location.href;
  public myId = "typeId";
  public textSuccess = "text-success";
  public isError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.isError,
    "text-danger" : this.isError,
    "text-special" : this.isSpecial
  }
  public isHilighted = "orange";
  public titleStyle = {
    color : "blue",
    fontStyle : "italic"
  }
  public greetingThing = "";
  constructor() { }

  onClick(event){
    this.greetingThing = "Good Morning!!!! Well come to my world...."+event.type;
    alert("sorry for what im doing this time, hope u understandood my problem....");
    console.log(event);
  }
  ngOnInit() {
  }

  wish(){
    return "Good Morning";
  }
  logMessage(value){
    console.log(value);
    alert(value);
  }
}
