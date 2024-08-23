package com.example.todo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.todo.models.Todo;
import com.example.todo.services.TodoService;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<Todo> getAll() {
        return todoService.getAll();
    }

    @GetMapping("/{id}")
    public Todo getById(@PathVariable Long id) {
        return todoService.getById(id);
    }

    @PostMapping
    public Todo create(@RequestBody Todo todo) {
        return todoService.create(todo.getTitle());
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        todoService.deleteById(id);
    }

    @PutMapping("/{id}")
    public void toggleCompleted(@PathVariable Long id) {
        todoService.toggleCompleted(id);
    }
}
