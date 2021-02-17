import React from 'react';
import {v4 as uuidv4} from 'uuid';

function Form ({ setInputText, setTodos, Todos, InputText, setStatus }) {
  const inputTextHandler = event =>{
    setInputText(event.target.value)
  }
  const submitTodoHandler = event =>{
    event.preventDefault();
    setTodos([
      ...Todos,
      {text: InputText, isCompleted: false, id: uuidv4()}
    ])
    setInputText('')
  }


  const statusHandler = event =>{
    setStatus(event.target.value)
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input value={InputText} type="text" className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">الكل</option>
          <option value="completed">المكتمل</option>
          <option value="uncompleted">غير المكتمل</option>
        </select>
      </div>
    </form>
  )
}

export default Form
