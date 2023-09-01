package com.kosalberk.todo.model.dto;

import lombok.Data;

import java.util.UUID;
@Data
public class TodoDto {
    private UUID uuid;
    private String title;
    private String description;

}
