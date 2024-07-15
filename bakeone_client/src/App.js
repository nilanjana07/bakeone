// src/App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

