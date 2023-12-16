import { useEffect, useState } from 'react';
import { Todo } from './models/todo';
import api from './api';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    api.todo.getAll().then(todos => setTodos(todos));
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