package com.example.demo.Controller;

import com.example.demo.Service.RoleService;
import com.example.demo.Service.UserService;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RoleNotFoundException;
import java.util.*;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final RoleService roleService;

    @GetMapping("/list")
    public List<User> listUsers(Model model) {
        List<User> userList = userService.getAllUsers();
        return userList;
        //model.addAttribute("users", userList);
        //return "userList"; // Une vue pour afficher la liste des utilisateurs
    }

    /*@GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("user", new User());
        return "createUserForm"; // Une vue pour créer un nouvel utilisateur
    }*/

    @PostMapping("/create")
    public User createUser(@RequestBody User user){
        System.out.println(user.getRole());
        //int i = 3;
        //Long id = Long.valueOf(i);
        //Role role = roleService.getRoleById(roleId);
        //user.setRole(role);
       return userService.createUser(user);

    }

    @GetMapping("/edit/{userId}")
    public String showEditForm(@PathVariable Long userId, Model model) {
        User user = userService.getUserById(userId);
        model.addAttribute("user", user);
        return "editUserForm"; // Une vue pour éditer l'utilisateur
    }

    @PostMapping("/edit/{userId}")
    public String updateUser(@PathVariable Long userId, @ModelAttribute("user") User user) {
        user.setId(userId);
        userService.updateUser(user);
        return "redirect:/users/list";
    }

    @GetMapping("/delete/{userId}")
    public String deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return "redirect:/users/list";
    }

}
