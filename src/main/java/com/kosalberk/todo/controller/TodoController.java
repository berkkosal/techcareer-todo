package com.kosalberk.todo.controller;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.UUID;

public interface TodoController<D> {

    //Create
    public ResponseEntity<?>  todoApiCreate(D d);

    //List
    public ResponseEntity<List<D>>  todoApiList();

    //Find By
    public ResponseEntity<?>  todoApiFindById(UUID uuid);

    // UPDATE
    public ResponseEntity<?>  todoApiUpdate(UUID uuid,D d);

    // DELETE
    public ResponseEntity<?>  todoApiDeleteById(UUID uuid);


}
