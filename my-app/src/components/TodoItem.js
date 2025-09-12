import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const TodoItem = ({ todo }) => {
  const { state, dispatch } = useContext(TodoContext);

  const markAsDone = () => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } });
  };

  const removeTodo = () => {
    dispatch({ type: "REMOVE_TODO", payload: { id: todo.id } });
  }

  return (
    <div className="todo-item">
      <span
        className={todo.done ? "todo-done" : ""}
        onClick={markAsDone}
      >
        {todo.text}
      </span>
      <button onClick={removeTodo}>X</button>
    </div>
  );
};
