import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        </Routes>
      </Router>
    </>
  )
}

export default App
