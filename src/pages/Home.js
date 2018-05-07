import React from 'react';
import dayum from '../dayum.gif';

const Home = () => (
  <div>
    <div className="App">
      <h1 className="App-title">Velkommen til Adam's <s>matkasse</s> oppskrifter</h1>
      <img src={dayum} alt="dayum" title="dayum" />
    </div>
  </div>
);

export default Home;