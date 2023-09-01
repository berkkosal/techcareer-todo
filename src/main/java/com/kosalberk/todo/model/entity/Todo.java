package com.kosalberk.todo.model.entity;
import jakarta.persistence.Entity;
import lombok.Data;

import java.util.UUID;
@Data
@Entity
public class Todo extends BaseEntity {
    private String title;
    private String description;

}