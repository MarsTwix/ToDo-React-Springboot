import { useEffect, useState } from 'react';
import { Todo } from '#/models/todo';
import api from '#/api';
import TodoItems from '#/components/todo/TodoItem';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    api.todo.getAll().then(todos => setTodos(todos));
  }, []);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      {
        todos.map(todo => (
          <TodoItems key={todo.id} todo={todo} />
        ))
      }
    </div>
  );
}

export default App;