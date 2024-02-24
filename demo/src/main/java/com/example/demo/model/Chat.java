package com.example.demo.model;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;
    @OneToOne
    private User sender;
    @OneToOne
    private User receiver;
    @OneToOne
    private Attachment attachment;


}
