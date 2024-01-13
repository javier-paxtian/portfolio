import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shedules from './pages/shedules';
import ToDoList from './pages/toDoList';
import Cripto from './pages/cripto';

function App() {

  const Home = () => {
    return <>
      <h1>Este es el home</h1>
    </>
  }

  const Calculadora = () => {
    return <>
      <h1>Este es una calculadora</h1>
    </>
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/shedules" element={<Shedules />} />
          <Route path="/to-do-list" element={<ToDoList />} />
          <Route path="/cripto" element={<Cripto />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
