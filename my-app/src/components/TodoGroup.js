import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";
import TodoGenerator from "./TodoGenerator";
import './../App.css';

export const TodoGroup = () => {
  const { state } = useContext(TodoContext);

  const ToDoList = () => {
    return (
      <div className="todo-list">
        {state.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <ToDoList />
      <TodoGenerator />
    </div>
  );
};
