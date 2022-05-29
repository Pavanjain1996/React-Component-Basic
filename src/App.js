import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import About from './MyComponents/About'
import Increment from './MyComponents/Increment'
import TitleChange from './MyComponents/TitleChange';
import NumberGame from './MyComponents/NumberGame';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (task, desc) => {
    let sno = todos.length ? todos[todos.length - 1].sno + 1 : 1
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
      <Header title="Don't React" searchBar={false} />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/todoApplication' element={<Todos todos={todos} onDelete={onDelete} addTodo={addTodo} />} />
        <Route path='/numberIncrementor' element={<Increment />} />
        <Route path='/textCopier' element={<TitleChange />} />
        <Route path='/numberGame' element={<NumberGame />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
