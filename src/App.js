import logo from './logo.svg';
import './App.scss';
import HelloComponent from './components/HelloComponents';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />


        <i className="fi fi-ro-clean"></i>

        <HelloComponent></HelloComponent>
      </header>
    </div>
  );
}

export default App;
