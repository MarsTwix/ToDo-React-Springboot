import api from "#/api";
import { Todo } from "#/models/todo";
import { FC } from "react";
import { FaTrash } from "react-icons/fa";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const todoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  const OnCheckboxToggle = () => {
    api.todo.toggleCompleted(todo.id)
    todo.completed = !todo.completed;
  };

  return (
    <div className="flex ml-1 items-center mt-2">
      <input
        className="mr-4 w-4 h-4 cursor-pointer"
        type="checkbox"
        defaultChecked={todo.completed}
        onClick={OnCheckboxToggle}
        size={24}
      />
      <p
        className={`text-center mr-4 text-1xl ${todo.completed ? "line-through" : ""}`}
      >
        {todo.title}
      </p>
      <FaTrash className="text-red-500 cursor-pointer" onClick={() => onDelete(todo.id)} />
    </div>
  );
};

export default todoItem;
