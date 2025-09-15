import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useLocation, useNavigate } from "react-router";

import api from "../api/mockApi";

export const TodoItem = ({
  todo,
  displayDetailBtn = true,
  displayDeleteBtn = true,
}) => {
  const { dispatch } = useContext(TodoContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isTodoDetailPage = location.pathname.includes("/todos");

  const markAsDone = () => {
    if (isTodoDetailPage) {
      return;
    }

    api.put("/todos/" + todo.id, { ...todo, done: !todo.done })
      .then(() => {
        dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } });
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  const removeTodo = () => {
    api.delete("/todos/" + todo.id)
      .then(() => {
        dispatch({ type: "REMOVE_TODO", payload: { id: todo.id } });
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  const navigateToDone = () => {
    navigate("/todos/" + todo?.id);
  };

  return (
    <div className="todo-item-container">
      <div className="todo-item">
        <span className={todo.done ? "todo-done" : ""} onClick={markAsDone}>
          {todo.text}
        </span>
      </div>
      {displayDetailBtn && (
        <button className="todo-detail-btn" onClick={navigateToDone}>
          Detail
        </button>
      )}
      {displayDeleteBtn && (
        <button className="todo-remove-btn" onClick={removeTodo}>
          X
        </button>
      )}
    </div>
  );
};
