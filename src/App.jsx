import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shedules from './pages/shedules';
import ToDoList from './pages/toDoList';
import Cripto from './pages/cripto';
import Home from './pages/home';
import Calculadora from './pages/calculadora';
import Navbar from './pages/components/navbar.component';

function App() {
  const cualquierCosa = () => {
    return <>
      <h1>Este es una calculadora</h1>
      <h2>  </h2>
    </>
  }

  return (
    <>
      <Router>
        <Navbar />
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
