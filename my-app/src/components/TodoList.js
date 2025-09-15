import React from 'react'
import TodoGenerator from './TodoGenerator'
import { TodoGroup } from './TodoGroup'

const ToList = () => {

  const TodoGroupHeader = () => {
    return (
      <h1>Todo List</h1>
    );
  }

  return (
    <>
        <TodoGroupHeader />
        <TodoGroup />
        <TodoGenerator />
    </>
  )
}

export default ToList