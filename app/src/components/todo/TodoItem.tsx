import { Todo } from "#/models/todo";
import { FC } from "react";

interface TodoItemProps {
    todo: Todo;
}

const todoItem:FC<TodoItemProps> = ({todo}) => {

    return (
        <div>
            <h1>{todo.title}</h1>
        </div>
    )
}

export default todoItem