import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import logo from './logo.png';
import MyRecipes from './pages/MyRecipes.js';
import Home from './pages/Home.js';

const Header = () => (
  <div className="App">
    <header className="App-header">
      <Link to='/' >
        <img src={logo} className="App-logo" alt="hjem"/>
      </Link>
      <nav>
        <ul>
          <li><Link to='/'>Hjem</Link></li>
          <li><Link to='/oppskrifter'>Oppskrifter</Link></li>
        </ul>
      </nav>
    </header>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/oppskrifter' component={MyRecipes} />
    </Switch>
  </main>
);

const App = () => (
  <HashRouter>
    <div>
      <Header />
      <Main />
    </div>
  </HashRouter>
);

export default App;
