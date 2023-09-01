package com.kosalberk.todo.controller.impl;

import com.kosalberk.todo.controller.TodoController;
import com.kosalberk.todo.model.dto.TodoDto;
import com.kosalberk.todo.service.TodoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class TodoControllerImpl implements TodoController<TodoDto> {

    private final TodoService todoService;
    @Override
    @PostMapping("/create")
    public ResponseEntity<?> todoApiCreate(@Valid @RequestBody TodoDto todoDto) {
        return ResponseEntity.ok(todoService.todoServiceCreate(todoDto));
    }

    @Override
    @GetMapping(value="/list")
    public ResponseEntity<List<TodoDto>> todoApiList() {
        return ResponseEntity.status(HttpStatus.OK).body(todoService.todoServiceList());
    }




}
