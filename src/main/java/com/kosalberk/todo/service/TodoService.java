package com.kosalberk.todo.service;

import com.kosalberk.todo.model.dto.TodoDto;

import java.util.List;
import java.util.UUID;

public interface TodoService<D, E> {
    //Model mapper
    public D entitytoDto(E e);
    public E dtoToEntity(D d);

    //Create
    public D todoServiceCreate(D d);

    //List
    public List<D> todoServiceList();

    //Find By
    public D todoServiceFindById(UUID uuid);

    //Update
    public D todoServiceUpdate(UUID uuid, D d);

    //Delete
    public D todoServiceDeleteById(UUID uuid);

}
