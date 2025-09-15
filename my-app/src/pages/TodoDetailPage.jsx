import React, { useContext } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../contexts/TodoContext";

import { TodoItem } from "../components/TodoItem";

const TodoDetailPage = () => {
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  const todo = state?.filter((todo) => todo.id === parseInt(id));

  if (todo?.length === 0) {
    return <div>Todo not found</div>;
  }

  return (
    <div>
      <h1>Todo Detail Page</h1>
      <TodoItem todo={todo[0]} displayDetailBtn={false} />
    </div>
  );
};

export default TodoDetailPage;
