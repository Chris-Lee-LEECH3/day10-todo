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

  const TodoGroupHeader = () => {
    return (
      <h1>Todo List</h1>
    );
  }

  const TodoGroupDescription = () => {
    return (
      <p>
        Add the things you need to do today...
      </p>
    );
  }

  return (
    <div className="todo-group-container">
      <TodoGroupHeader />
      { state.length === 0 ? <TodoGroupDescription /> : <ToDoList /> }
      <TodoGenerator />
    </div>
  );
};
