import './App.css';
import React, { useState } from 'react';
import ColorDisplay from './components/ColorDisplay';
import ColorForm from './components/ColorForm';

function App() {
  const [ dimensionList, setDimensionList ] = useState([]);
  const [ colorList, setColorList ] = useState([]);

  
  return (
    <div className="App">
      <ColorForm colorList={ colorList } setColorList={ setColorList } dimensionList={ dimensionList } setDimensionList={ setDimensionList }  />
      <ColorDisplay colorList={ colorList } dimensionList={ dimensionList }/>

      {

      }
    </div>
  );
}

export default App;
