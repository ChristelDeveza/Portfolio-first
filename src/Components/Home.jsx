import React from 'react';
import './Home.css';
import Particules from './Particules.jsx';

function Home() {
  return (
    <div className='home' id='Accueil'>
      <Particules />
      <div className='home-container'>
        <h1 className='home-text'>Bonjour et bienvenue sur mon portfolio</h1>
      </div>
      <div className='ring-container'>
        <div className='ring'></div>
        <div className='ring'></div>
        <div className='ring'></div>
      </div>
    </div>
  );
}

export default Home;
