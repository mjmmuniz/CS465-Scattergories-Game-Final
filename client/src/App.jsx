import { useState, useEffect } from 'react';
import './styles/App.css';
import { socket } from './Socket';

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected! socket id:', socket.id);
    });
  }, []);

  return <div>Scattergories Client</div>
}

export default App;
