import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const DoneListPage = () => {
  const { state } = useContext(TodoContext);
  const doneTodos = state?.filter((todo) => todo.done);

  return (
    <div className="done-list-container">
      <h1>Done Todos</h1>
      <ul>
        {doneTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneListPage;
