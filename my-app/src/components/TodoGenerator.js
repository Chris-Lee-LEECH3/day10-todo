import React, { useContext, useState } from "react";
import api from "../api/mockApi";
import { TodoContext } from "../contexts/TodoContext";
import "./../App.css";

const createTodo = (todoItem) => {
  return api
    .post("/todos", { text: todoItem.trim(), done: false })
    .then((response) => response.data);
};

const TodoGenerator = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [todoItem, setTodoItem] = useState("");

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
