import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {User} from "../model/user";
import {UserService} from "../user.service";
import {FormsModule, NgForm} from "@angular/forms";
import {Role} from "../model/role";
import {RoleService} from "../role.service";


@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit{
  user: User = {};
  roles: Role[] = [];

  constructor(private userService: UserService, private roleService: RoleService, private router: Router,) {}

    ngOnInit() {
      this.roleService.getRole().subscribe((data: Role[]) => {
        this.roles = data;
      });
    }

    saveUser(): void {
      console.log(this.user);
      this.userService.createUser(this.user).subscribe(
          response => {
            console.log('User created:', response);
            // Réinitialiser le formulaire ou faire d'autres actions après la création
          },
          error => {
            console.error('Error creating user:', error);
          }
      );
    }


  submit(user: User) {
    /*const data: User = {
      role:  user.role,
      identification: user.identification,
      name: user.name,
      password: user.password,
      email: user.email
    }*/
    console.log(user)
    this.userService.createUser(user).subscribe(
        (user) => {
          console.log(user)
        }

    )
  }
}
