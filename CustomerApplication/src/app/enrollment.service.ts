import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  //_url = 'http://localhost:3000/enroll';
  _url = 'http://localhost:8080/hello';
  constructor(private _http:HttpClient) { }
  enroll(user : User){
    //return this._http.post<any>(this._url, user);
    return this._http.get(this._url);
  }
}
