import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  public departments = [
    { "id" : 1, "name" :"AngularJS"},
    { "id" : 2, "name" :"Spring"},
    { "id" : 3, "name" :"MicroSer"},
    { "id" : 4, "name" :"Scala"},
    { "id" : 5, "name" :"JAVA8"}
  ]
  constructor(private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param : ParamMap) => {
      this.selectedId = parseInt(param.get('id'));
    });
  }
  onSelect(department){
    //this.router.navigate(['departments',department.id]);
    this.router.navigate([department.id],{relativeTo : this.route})
  }
  isSelected(department){
    //alert(department.id === this.selectedId);
    return department.id === this.selectedId ;
  }

}
