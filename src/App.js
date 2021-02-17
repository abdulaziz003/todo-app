import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {

  const [InputText, setInputText] = useState('');
  const [Todos, setTodos] = useState([]);
  const [Status, setStatus] = useState('all');
  const [FilteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [Todos, Status])

  const filterHandler = ()=> {
    switch(Status){
      case 'completed':
        setFilteredTodos(Todos.filter(todo => todo.isCompleted === true));
        break;
      case 'uncompleted':
        setFilteredTodos(Todos.filter(todo => todo.isCompleted === false));
        break;
      case 'all':
        setFilteredTodos(Todos)
        break;
      default:
        setFilteredTodos(Todos)
    }
  }


  const saveLocalTodos = () =>{
    if(localStorage.getItem('Todos') === null){
      localStorage.setItem('Todos', JSON.stringify([]))
    }else{
      localStorage.setItem('Todos', JSON.stringify(Todos))
    }
  }
  const getLocalTodos = () =>{
    if(localStorage.getItem('Todos') === null){
      localStorage.setItem('Todos', JSON.stringify([]))
    }else{
      setTodos(JSON.parse(localStorage.getItem('Todos')))
    }
  }


  return (
    <div className="App">
      <header>
        <h1>المهام اليومية لعبدالعزيز</h1>
      </header>
      <Form 
        InputText={InputText}
        setInputText={setInputText}
        setTodos={setTodos}
        Todos={Todos} 
        setStatus={setStatus}
        />
      <TodoList Todos={FilteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
