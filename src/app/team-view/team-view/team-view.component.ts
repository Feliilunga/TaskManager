import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {User} from "../../model/user";
import {Team} from "../../model/team";
import {TeamService} from "../../team.service";

@Component({
  selector: 'app-team-view',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './team-view.component.html',
  styleUrl: './team-view.component.css'
})
export class TeamViewComponent {
  team: Team[] = [];
  imageUrl: string = 'https://anthonycarbonepersonalinjurylawyer.com/wp-content/uploads/2018/06/shutterstock_126920099-300x225.jpg'

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService.getTeam().subscribe((data: Team[]) => {
      this.team = data;
      console.log(this.team);
    })
  }
}
