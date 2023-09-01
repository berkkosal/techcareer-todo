package com.kosalberk.todo.service;

import java.util.List;

public interface TodoService<D, E> {
    //Model mapper
    public D entitytoDto(E e);
    public E dtoToEntity(D d);

    //Create
    public D todoServiceCreate(D d);

    //List
    public List<D> todoServiceList();

}
