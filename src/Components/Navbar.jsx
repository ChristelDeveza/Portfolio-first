import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar]=useState(false)

  function showSidebar(){
    setSidebar(!sidebar)
  }
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <div className='button-container'>
            <button
              className={sidebar?'hamburger open':'hamburger'}
              type='button'
              aria-label='Toggle nav'
              aria-expanded='false'
              onClick={showSidebar}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={!sidebar? 'nav-container':'nav-container open'}>
            <li>
              <a href='/'>Accueil</a>
            </li>
            <li>
              <a href='/#About'>A propos</a>
            </li>
            <li>
              <a href='/#Projects'>Projets</a>
            </li>
            <li>
              <a href='/#Skills'>Compétences</a>
            </li>
            <li>
              <a href='/#Contact'>Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
