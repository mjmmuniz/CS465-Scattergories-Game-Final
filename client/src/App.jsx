import { useState, useEffect } from 'react';
import './styles/App.css';
import { socket } from './Socket';
import Home from './views/Home';

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected! socket id:', socket.id);
    });
  }, []);

  return <Home />; 
}

export default App;
