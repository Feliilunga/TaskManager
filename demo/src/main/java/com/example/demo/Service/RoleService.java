package com.example.demo.Service;

import com.example.demo.Repository.RoleRepository;
import com.example.demo.model.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;

    public List<Role> getAllRole() {
        return roleRepository.findAll();
    }
    public Role getRoleById(Long id){
        return roleRepository.getReferenceById(id);
    }


}
