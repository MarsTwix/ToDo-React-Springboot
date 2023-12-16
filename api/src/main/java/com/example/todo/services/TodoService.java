package com.example.todo.services;

import com.example.todo.models.Todo;
import com.example.todo.repositories.TodoRepository;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAll() {
        return todoRepository.findAll();
    }

    public void deleteById(Long id) {
        todoRepository.deleteById(id);
    }
}
 