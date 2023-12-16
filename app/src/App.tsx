import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;