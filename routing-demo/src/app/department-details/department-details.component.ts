import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h1>
      department-details works!
    </h1>
    <h3>You have selected department id {{departmentId}}</h3>
    <p>
      <button (click)="showOverview()">Overview</button>&nbsp;&nbsp;&nbsp;
      <button (click)="showContact()">Contact</button>
    </p>
    <p>
    <button (click)="goPrevious()">Previous</button>&nbsp;&nbsp;&nbsp;
    <button (click)="goNext()">Next</button>
    </p>
    <button (click)="gotoDepartments()">Back</button>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    //this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(( param : ParamMap ) => {
      this.departmentId = parseInt(param.get('id'));
    });
  }
  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments',previousId]);
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments',nextId]);
  }
  gotoDepartments(){
    //this.router.navigate(['/departments',{id:this.departmentId}]);
    this.router.navigate(['../',{id : this.departmentId}],{relativeTo : this.route});
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo : this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo : this.route});
  }
}
