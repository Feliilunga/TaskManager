package com.example.demo.Service;

import com.example.demo.Repository.TeamRepository;
import com.example.demo.model.Team;
import com.example.demo.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeamService {
    private final TeamRepository teamRepository;

    public List<Team> getAllTeams(){
        return teamRepository.findAll();
    }
}
