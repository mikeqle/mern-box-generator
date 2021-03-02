import './App.css';
import React, { useState } from 'react';
import ColorDisplay from './components/ColorDisplay';
import ColorForm from './components/ColorForm';

function App() {
  const [ colorList, setColorList ] = useState([]);

  
  return (
    <div className="App">
      <ColorForm colorList={ colorList } setColorList={ setColorList } />
      <ColorDisplay colorList={ colorList }/>

      {

      }
    </div>
  );
}

export default App;
