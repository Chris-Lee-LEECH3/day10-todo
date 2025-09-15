import React from 'react'
import TodoGenerator from './TodoGenerator'
import { TodoGroup } from './TodoGroup'
import { Col } from 'antd'

const ToList = () => {

  const TodoGroupHeader = () => {
    return (
      <h1>Todo List</h1>
    );
  }

  return (
    <Col span={12} className="todo-group-container">
        <TodoGroupHeader />
        <TodoGroup />
        <TodoGenerator />
    </Col>
  )
}

export default ToList