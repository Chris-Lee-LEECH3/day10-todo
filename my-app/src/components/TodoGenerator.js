import React, { useContext, useState } from "react";
import { Button, Input, Flex } from "antd";
import { Button, Input, Flex } from "antd";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoService } from "../useTodoService";
import "./../App.css";
import "./../App.css";

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
    <Flex gap="small">
      <Input
        placeholder="Write the new Todo Item"
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <Button type="primary" onClick={addTodo}>
        Add
      </Button>
    </Flex>
  );
};

export default TodoGenerator;
