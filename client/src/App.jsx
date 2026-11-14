import { useState, useEffect } from 'react';
import './styles/App.css';
import { socket } from './Socket';
import Home from './views/Home';

function App() {

  return (
    <div>
    <h1>Scattergories</h1>
    <Home />
    </div>
  ); 
}

export default App;
