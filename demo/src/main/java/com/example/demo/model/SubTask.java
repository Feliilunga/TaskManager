package com.example.demo.model;
import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class SubTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private int point;
    @ManyToOne
    private Task task;
    @ManyToOne
    private User assignedTo;
    private String state;

}
