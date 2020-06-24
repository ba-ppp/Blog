import React from 'react';
import './App.css';
import Router from './components/JS/Router';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Router/>
      </div>
    </HashRouter>
  );
}

export default App;
