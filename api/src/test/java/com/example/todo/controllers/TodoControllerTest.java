package com.example.todo.controllers;

import com.example.todo.models.Todo;
import com.example.todo.services.TodoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

public class TodoControllerTest {
    private TodoService todoService;
    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        todoService = mock(TodoService.class);
        mockMvc = MockMvcBuilders.standaloneSetup(new TodoController(todoService)).build();
    }

    @Test
    public void testGetAll() throws Exception {
        when(todoService.getAll()).thenReturn(Arrays.asList(new Todo(), new Todo()));

        mockMvc.perform(get("/todos")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON));

        verify(todoService, times(1)).getAll();
    }

    @Test
    public void testDeleteById() throws Exception {
        long todoId = 1L;

        mockMvc.perform(delete("/todos/{id}", todoId)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        verify(todoService, times(1)).deleteById(todoId);
    }

}
