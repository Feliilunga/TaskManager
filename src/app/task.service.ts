import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model/user";
import {Task} from "./model/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/task/list';
  private createUrl = 'http://localhost:8080/task/create';
  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl)
  }

  createTask(task: Task): Observable<Object> {
    return this.httpClient.post(this.createUrl, task);
  }
}
