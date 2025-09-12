import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoGroup = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div>
      {state.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </div>
  );
};
