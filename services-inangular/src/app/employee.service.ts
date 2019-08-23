import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employeeInterface';
import { Observable } from 'rxjs/';
//import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = "/assets/data/employees.json";
  private _urlGet : string = "http://localhost:8080/employees";
  constructor(private http : HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url);
      //.catch(this.errorHandler);
                      
  }

  getEmployeesNormal(){
     return [
       {"id": 1, "name" : "Mahendra", "age" :26 },
       {"id": 2, "name" : "Cherry", "age" :22 },
       {"id": 3, "name" : "Padmavathi", "age" :25 },
       {"id": 4, "name" : "Sravani", "age" :27 }
     ];
       //alert(this.http.get<IEmployee[]>(this._url));
       //return this.http.get<IEmployee[]>(this._url);
   }
   errorHandler(error : HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
   }
}
