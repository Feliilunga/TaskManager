import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model/user";
import {Role} from "./model/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'http://localhost:8080/users/list';
  private createUrl = 'http://localhost:8080/users/create'

  constructor(private httpClient: HttpClient) { }

  getRole(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.createUrl)
  }

}
