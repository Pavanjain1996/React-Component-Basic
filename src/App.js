import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import React, {useEffect, useState} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
  }

  const addTodo = (task, desc) => {
    let sno = todos.length ? todos[todos.length-1].sno + 1 : 1
    const myTodo = {
      sno: sno,
      task: task,
      desc: desc
    }
    setTodos([...todos, myTodo])
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My Todo List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete} addTodo={addTodo}/>
      <Footer />
    </>
  );
}

export default App;
