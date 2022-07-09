import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <div className='"main-nav'>
            <button
              className='hamburger open'
              type='button'
              aria-label='Toggle nav'
              aria-expanded='false'
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className='nav-container'>
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
