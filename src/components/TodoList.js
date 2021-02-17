
import React from 'react'
import Todo from './Todo'

function TodoList({ Todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {Todos.map(todo => (
          <Todo isCompleted={todo.isCompleted} id={todo.id} text={todo.text} key={todo.id} setTodos={setTodos} Todos={Todos} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
