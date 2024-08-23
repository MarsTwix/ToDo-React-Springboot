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

    public Todo getById(Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    public Todo create(String title) {
      return todoRepository.save(new Todo(title));
    }

    public void deleteById(Long id) {
        todoRepository.deleteById(id);
    }

    public void toggleCompleted(Long id) {
        Todo todo = todoRepository.findById(id).orElse(null);
        if (todo != null) {
            todo.toggleCompleted();
            todoRepository.save(todo);
        }
    } 
}
 
