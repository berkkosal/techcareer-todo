package com.kosalberk.todo.service.impl;

import com.kosalberk.todo.model.dto.TodoDto;
import com.kosalberk.todo.model.entity.Todo;
import com.kosalberk.todo.repository.TodoRepository;
import com.kosalberk.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<TodoDto> todoServiceList() {
        return null;
    }
}
