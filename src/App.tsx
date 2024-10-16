import React from 'react';

import CharactersPage from './characters/CharactersPage';
import CharacterPage from './characters/CharacterPage';
import StoriesPage from './stories/StoriesPage';
import HomePage from './home/HomePage';

import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <header className='sticky'>
          <span className="logo">
            <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
          </span>
          <NavLink to="/" className="button rounded">
            <span className='icon-home'></span> Home
          </NavLink>
          <NavLink to="/characters" className="button rounded">
          Characters
          </NavLink>
          <NavLink to="/stories" className="button rounded" >
          Stories
          </NavLink>
        </header>
        <Routes>
          <Route path='/' element={<HomePage /> } />
          <Route path='/characters' element={<CharactersPage /> } />
          <Route path='/characters/:id' element={<CharacterPage /> } />
          <Route path='/stories' element={ <StoriesPage /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
