import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Input from './components/Input';
import ColorInput from './components/ColorInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Input path="/:input" />
        <ColorInput path="/:input/:color/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
