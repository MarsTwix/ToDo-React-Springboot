import { useEffect, useState } from "react";
import { Todo } from "#/models/todo";
import api from "#/api";
import TodoItems from "#/components/todo/TodoItem";
import AddTodoBar from "./components/todo/AddTodoBar";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    api.todo.getAll().then((todos) => setTodos(todos));
  }, []);

  const onDelete = (id: number) => {
    api.todo.deleteById(id).then(() => {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    });
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold underline">Hello, React!</h1>
      {todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
      <AddTodoBar setTodos={setTodos} />
    </div>
  );
}

export default App;
