import { useState, useEffect } from 'react';
import './styles/App.css';
import { socket } from './Socket';
import Home from './views/Home';
import Voting from './pages/voting';

function App() {

  return (
    <div>
    <h1>Scattergories</h1>
    <Home />
    <Voting />
    </div>
  ); 
}

export default App;
