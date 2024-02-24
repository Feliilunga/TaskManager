import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {User} from "../model/user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-view',
  standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent implements OnInit{
  users: User[] = [];
  title: string = 'User Page';

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
   this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
     console.log(this.users);
    })
  }

}
