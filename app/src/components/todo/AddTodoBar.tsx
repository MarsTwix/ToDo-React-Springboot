import api from "#/api";
import { Todo } from "#/models/todo";
import { FC, useState } from "react";
import { CiSquareCheck, CiSquarePlus } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

interface AddTodoBarProps {
  setTodos: (todos: Todo[]) => void;
}

const AddTodoBar: FC<AddTodoBarProps> = ({ setTodos }) => {
  const [toggleBar, setToggleBar] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const onToggleBar = () => {
    setToggleBar((prev) => !prev);
  };

  const onAddTodo = async () => {
    if (title === "") {
      return;
    }
    await api.todo.create(title).then((todo) => {
      setTodos((prev) => [...prev, todo]);
    });
    setToggleBar(false);
  };

  return (
    <div>
      {toggleBar ? (
        <div className="flex items-center mt-4">
          <CiSquareCheck
            className={` ${title === "" ? "text-gray-400" : "text-green-600"} cursor-pointer mr-3 text-2xl`}
            size={24}
            onClick={onAddTodo}
          />
          <input
            className="h-10 border-2 border-gray-300 pl-2 rounded-md w-1/4 mr-3"
            type="text"
            placeholder="Todo title"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          <MdOutlineClose
            className="text-red-600 cursor-pointer"
            size={24}
            onClick={onToggleBar}
          />
        </div>
      ) : (
        <CiSquarePlus
          className="text-gray-400 cursor-pointer mt-6"
          size={24}
          onClick={onToggleBar}
        />
      )}
    </div>
  );
};

export default AddTodoBar;
