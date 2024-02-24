import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import {User} from "./model/user";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent implements OnInit{
  title = 'task_manager';
  users: User[] = [];

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    console.log('on Init...')
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    })
  }

}
