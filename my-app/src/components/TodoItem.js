import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router";
import { useTodoService } from "../useTodoService";

export const TodoItem = ({
  todo,
  displayDetailBtn = true,
  displayDeleteBtn = true,
}) => {
  const { dispatch } = useContext(TodoContext);
  const navigate = useNavigate();
  const { updateTodo, deleteTodo } = useTodoService();

  const markAsDone = () => {
    updateTodo(todo)
      .then((updatedTodo) => {
        dispatch({ type: "TOGGLE_TODO", payload: { id: updatedTodo.id } });
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  const removeTodo = () => {
    deleteTodo(todo.id)
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
