import React, { useState } from 'react';
import './App.css';
import BasicRange from './components/range';
import Rank from './components/rank';
import data from './data/generated.js';

function App() {
  const [range, setRange] = useState(0);
  return (
    <div className="App"
      style={{
        display: 'grid',
        gridTemplateRows: '93vh 7vh',
      }}>
        <Rank range={range} />
        <BasicRange range={range} setRange={setRange} maxRange={data.length}/>
    </div>
  );
}

export default App;
