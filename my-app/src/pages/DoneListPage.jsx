import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "../components/TodoItem";

const DoneListPage = () => {
  const { state } = useContext(TodoContext);
  const doneTodos = state?.filter((todo) => todo.done);

  return (
    <div className="done-list-container">
      <h1>Done Todos</h1>
      <ul>
        {doneTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} displayDeleteBtn={false} />
        ))}
      </ul>
    </div>
  );
};

export default DoneListPage;
