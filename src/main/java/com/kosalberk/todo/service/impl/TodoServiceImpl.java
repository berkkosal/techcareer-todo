package com.kosalberk.todo.service.impl;

import com.kosalberk.todo.model.dto.TodoDto;
import com.kosalberk.todo.model.entity.Todo;
import com.kosalberk.todo.repository.TodoRepository;
import com.kosalberk.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class TodoServiceImpl implements TodoService<TodoDto, Todo> {
    private final TodoRepository todoRepository;
    private final ModelMapper modelMapper;


    @Override
    public TodoDto entitytoDto(Todo todo) {
        return modelMapper.map(todo, TodoDto.class);
    }

    @Override
    public Todo dtoToEntity(TodoDto todoDto) {
        return modelMapper.map(todoDto,Todo.class);
    }

    //Create
    @Override
    public TodoDto todoServiceCreate(TodoDto todoDto) {
        if(todoDto!=null){
            Todo todo = dtoToEntity(todoDto);
           todoRepository.save(todo);
           todoDto.setUuid(todo.getUuid());

        }else {
            throw new NullPointerException("null veri");
        }
        return todoDto;
    }

    //List
    @Override
    public List<TodoDto> todoServiceList() {
        Iterable<Todo> entityIterable = todoRepository.findAll();
        List<TodoDto> todoDtoList = new ArrayList<>();
        for (Todo todo:entityIterable){
            TodoDto todoDto=entitytoDto(todo);
            todoDtoList.add(todoDto);
        }
        return todoDtoList;

    }
    //Find By
    @Override
    public TodoDto todoServiceFindById(UUID uuid) {
        Todo findTodo = null;
        if(uuid!=null){
            findTodo = todoRepository.findById(uuid)
                    .orElseThrow(()->new RuntimeException("Id Bulunamadı."));

        }
        return entitytoDto(findTodo);
    }

    //Update
    @Override
    public TodoDto todoServiceUpdate(UUID uuid, TodoDto todoDto) {
        TodoDto todoFindDto = todoServiceFindById(uuid);
        if (todoFindDto!=null){
            Todo todo = dtoToEntity(todoFindDto);
            todo.setTitle(todoDto.getTitle());
            todo.setDescription(todoDto.getDescription());
            todoRepository.save(todo);
        }
        return todoDto;
    }

    //Delete
    @Override
    public TodoDto todoServiceDeleteById(UUID uuid) {
        TodoDto todoFindDto = todoServiceFindById(uuid);
        if (todoFindDto!=null){
            todoRepository.deleteById(uuid);
        }
        return todoFindDto;
    }







}
