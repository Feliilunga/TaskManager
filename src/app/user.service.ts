import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
//import { User } from './user';
import {Observable} from "rxjs";
import {User} from "./model/user";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users/list';
  private createUrl = 'http://localhost:8080/users/create'
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  createUser(userData: User): Observable<Object> {
    //const headers = new HttpHeaders().set('content-type', 'application/json')
    //const body=JSON.stringify(userData);
    return this.httpClient.post(this.createUrl, userData);
  }

}
