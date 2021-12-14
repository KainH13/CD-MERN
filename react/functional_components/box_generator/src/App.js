import React, { useState } from "react";
import './App.css';
import ColorForm from './components/ColorForm';
import Boxes from './components/Boxes';

function App() {
  const [blocks, setBlocks] = useState([])

  return (
    <div className="App">
      <ColorForm blocks={ blocks } setBlocks={ setBlocks }/>
      <Boxes blocks={ blocks }/>
    </div>
  );
}

export default App;
