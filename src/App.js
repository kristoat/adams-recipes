import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.png';
import './App.css';

import MyRecipes from './pages/MyRecipes.js';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Velkommen til Adam's <s>matkasse</s> oppskrifter</h1>
      </header>
      <p className="App-intro">
        <MyRecipes />
      </p>
    </div>
  </BrowserRouter>
);

export default App;
