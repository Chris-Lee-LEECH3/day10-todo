import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Divider, Modal, Input } from "antd";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoService } from "../useTodoService";

export const TodoItem = ({
  todo,
  displayDetailBtn = true,
  displayDeleteBtn = true,
}) => {
  const { dispatch } = useContext(TodoContext);
  const navigate = useNavigate();
  const { updateTodo, deleteTodo } = useTodoService();

  const updateTodoTextRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const updatedTodo = { ...todo, text: updateTodoTextRef.current };
    updateTodo(updatedTodo)
      .then(() => {
        dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const markAsDone = () => {
    const updatedTodo = { ...todo, done: !todo.done };
    updateTodo(updatedTodo)
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

  const EditTodoItemModal = () => {
    return (
      <Modal
        title={<h2>Edit Todo Item:</h2>}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Divider />
        <Input
          defaultValue={updateTodoTextRef.current || todo.text}
          onChange={(e) => (updateTodoTextRef.current = e.target.value)}
        />
      </Modal>
    );
  };

  return (
    <div className="todo-item-container">
      <div className="todo-item">
        <span className={todo.done ? "todo-done" : ""} onClick={markAsDone}>
          {todo.text}
        </span>
      </div>
      {displayDetailBtn && (
        <Button className="todo-detail-btn" onClick={navigateToDone}>
          Detail
        </Button>
      )}

      <EditTodoItemModal />
      <Button className="todo-detail-btn" onClick={showModal}>
        Edit
      </Button>

      {displayDeleteBtn && (
        <Button className="todo-remove-btn" onClick={removeTodo}>
          X
        </Button>
      )}
    </div>
  );
};
