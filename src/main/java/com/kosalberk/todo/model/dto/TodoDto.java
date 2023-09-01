package com.kosalberk.todo.model.dto;

import com.kosalberk.todo.model.entity.BaseEntity;
import jakarta.persistence.Entity;
import lombok.Data;

import java.util.UUID;
@Data
public class TodoDto {
    private UUID uuid;
    private String title;
    private String description;
}
