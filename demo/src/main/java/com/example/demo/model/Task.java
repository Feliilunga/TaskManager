package com.example.demo.model;
import jakarta.persistence.*;

import lombok.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private int point;
    @ManyToOne
    private Team assignedTo;
    private String state;
    private double percent;


}
