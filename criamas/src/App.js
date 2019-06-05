import React from 'react';
import Bslider from './Bslider';
import Bstatic from './Bstatic';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bslider></Bslider>
        <Bstatic></Bstatic>
        <p>
          SKY CODE WORKING
        </p>
        
        <h1> Enjoy Learning </h1>

        <p>Team:<b>Osmary Carrillo, Adriana Montilla, Lourdes Rosales y Mercedes Ventocilla</b></p>
        
      </header>

    </div>
  );
}

export default App;
