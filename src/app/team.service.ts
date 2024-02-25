import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "./model/task";
import {Team} from "./model/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/team/list';
  private createUrl = 'http://localhost:8080/team/create';
  constructor(private httpClient: HttpClient) { }

  getTeam(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.apiUrl)
  }

  createTeam(team: Team): Observable<Object> {
    return this.httpClient.post(this.createUrl, team);
  }
}
