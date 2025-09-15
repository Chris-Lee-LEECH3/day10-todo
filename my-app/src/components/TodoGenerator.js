import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "./../App.css";
import { useTodoService } from "../useTodoService";

const TodoGenerator = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [todoItem, setTodoItem] = useState("");
  const { createTodo } = useTodoService();

  const addTodo = () => {
    if (todoItem.trim() === "") {
      return;
    }

    createTodo(todoItem).then((todo) => {
      dispatch({ type: "ADD_TODO", payload: todo });
      setTodoItem("");
    });
  };

  return (
    <div className="todo-generator-container">
      <input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
      <button className="todo-generator-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoGenerator;
