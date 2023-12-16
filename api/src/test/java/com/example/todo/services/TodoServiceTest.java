package com.example.todo.services;

import com.example.todo.models.Todo;
import com.example.todo.repositories.TodoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


public class TodoServiceTest {
    private TodoService todoService;

    @Mock
    private TodoRepository todoRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        todoService = new TodoService(todoRepository);
    }

    @Test
    public void testGetAll() {
        // Arrange
        List<Todo> todos = new ArrayList<>();
        todos.add(new Todo(1L, "Task 1", "Description 1", false));
        todos.add(new Todo(2L, "Task 2", "Description 2", false));
        when(todoRepository.findAll()).thenReturn(todos);

        // Act
        List<Todo> result = todoService.getAll();

        // Assert
        assertEquals(todos, result);
        verify(todoRepository, times(1)).findAll();
    }

    @Test
    public void testDeleteById() {
        // Arrange
        Long todoId = 1L;

        // Act
        todoService.deleteById(todoId);

        // Assert
        verify(todoRepository, times(1)).deleteById(todoId);
    }
}