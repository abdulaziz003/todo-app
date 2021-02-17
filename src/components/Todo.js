import React from 'react'

function Todo({isCompleted, id, text, setTodos, Todos }) {
  const deleteHandler = ()=>{
    setTodos(Todos.filter(el => el.id !== id))
  }
  const completeHandler = ()=> {
    setTodos(Todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo, isCompleted: !todo.isCompleted
        }
      }
      return todo
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  )
}

export default Todo
