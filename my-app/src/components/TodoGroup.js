import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";
import './../App.css';

export const TodoGroup = () => {
  const { state } = useContext(TodoContext);

  const TodoItems = () => {
    return (
      <div className="todo-list">
        {state.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
      </div>
    );
  };

  const TodoGroupDescription = () => {
    return (
      <p>
        Add the things you need to do today...
      </p>
    );
  }

  return (
    <div className="todo-group-container">
      {state?.length === 0 ? <TodoGroupDescription /> : <TodoItems />}
    </div>
  );
};
