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
import java.util.UUID;

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

    @Override
    @GetMapping(value = "/find/{uuid}")
    public ResponseEntity<?> todoApiFindById(@PathVariable UUID uuid) {
        return ResponseEntity.status(200).body(todoService.todoServiceFindById(uuid));
    }

    //??????
    @Override
    @PutMapping(value = "/update/{uuid}")
    public ResponseEntity<?> todoApiUpdate(@PathVariable (name = "uuid") UUID uuid, @Valid @RequestBody TodoDto todoDto) {
        return ResponseEntity.ok().body(todoService.todoServiceUpdate(uuid,todoDto));
    }

    //++
    @Override
    @DeleteMapping(value = "/delete/{uuid}")
    public ResponseEntity<?> todoApiDeleteById(@PathVariable UUID uuid) {
        return new ResponseEntity<>(todoService.todoServiceDeleteById(uuid),HttpStatus.OK);
    }

    //tüm todoları sil.

}
