import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h2 *ngIf="displayName; else elseBlock1"> 
                  Code Evelution
              </h2>
              <ng-template #elseBlock1>
                  <h1>
                      Mahendra Is gb
                  </h1>
              </ng-template>

              <h2 *ngIf="displayName; then thenBlock1; else elseBlock2"></h2>
              <ng-template #thenBlock1>
                  <h1>
                      Then Block
                  </h1>
              </ng-template>

              <ng-template #elseBlock2>
                  <h1>
                      else Block
                  </h1>
              </ng-template>

              <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'" > This is red color</div>
                <div *ngSwitchCase="'blue'" > This is blue color</div>
                <div *ngSwitchCase="'yellow'" > This is yellow color</div>
                <div *ngSwitchDefault > This is default color</div>
              </div>

              ----> For loop <-----
              <div *ngFor="let color of colors">
                <h3>{{i}} {{color}}</h3>
              </div>
              ----> For loop Index<-----
              <div *ngFor="let color of colors; index as i">
                <h3>{{i}} {{color}}</h3>
              </div>
              ----> For loop First <-----
              <div *ngFor="let color of colors; first as f">
                <h3>{{f}} {{color}}</h3>
              </div>
              ----> For loop Last<-----
              <div *ngFor="let color of colors; last as s">
                <h3>{{s}} {{color}}</h3>
              </div>
              ----> For loop Odd<-----
              <div *ngFor="let color of colors; odd as o">
                <h3>{{o}} {{color}}</h3>
              </div>
              ----> For loop Even<-----
              <div *ngFor="let color of colors; even as e">
                <h3>{{e}} {{color}}</h3>
              </div>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structural-directive';
  public displayName = true;
  public color = "blsue";
  public colors = ["red", "blue", "green", "yellow"];
}
