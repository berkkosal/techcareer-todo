package com.kosalberk.todo.model.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.UUID;
@Data
@Entity
@Table(name ="todos")
public class Todo extends BaseEntity {
    private String title;
    private String description;

    public Todo() {
    }

    public Todo(String title, String description) {
        this.title = title;
        this.description = description;
    }
}