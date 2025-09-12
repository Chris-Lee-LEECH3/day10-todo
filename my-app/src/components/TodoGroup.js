import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";
import TodoGenerator from "./TodoGenerator";

export const TodoGroup = () => {
  const { state } = useContext(TodoContext);
  return (
    <div>
      {state.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
      <TodoGenerator />
    </div>
  );
};
