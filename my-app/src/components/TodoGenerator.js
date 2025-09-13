import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext';

const TodoGenerator = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [todoItem, setTodoItem] = useState("");

  const addTodo = () => {
    const newTodo = { id: state.length + 1, text: todoItem, done: false };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTodoItem("");
  };

  return (
    <div className='todo-generator-container'>
      <input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
      <button className='todo-generator-btn' onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoGenerator