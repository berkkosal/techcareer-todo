package com.kosalberk.todo.controller;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TodoController<D> {

    //Create
    public ResponseEntity<?>  todoApiCreate(D d);

    //List
    public ResponseEntity<List<D>>  todoApiList();


}
