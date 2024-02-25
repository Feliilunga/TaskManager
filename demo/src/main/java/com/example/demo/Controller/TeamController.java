package com.example.demo.Controller;


import com.example.demo.Service.TeamService;
import com.example.demo.model.Team;
import com.example.demo.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/team")
@RequiredArgsConstructor
public class TeamController {

    private final TeamService teamService;
    @GetMapping("/list")
    public List<Team> listUsers(Model model) {
        List<Team> teamList = teamService.getAllTeams();
        return teamList;

    }
}
