package com.example.demo.Controller;

import com.example.demo.Service.RoleService;
import com.example.demo.Service.UserService;
import com.example.demo.model.Role;
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
@RequestMapping("/users")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;
    @GetMapping("/create")
    public List<Role> listUsers(Model model) {
        List<Role> roleList = roleService.getAllRole();
        return roleList;
        //model.addAttribute("users", userList);
        //return "userList"; // Une vue pour afficher la liste des utilisateurs
    }
}
