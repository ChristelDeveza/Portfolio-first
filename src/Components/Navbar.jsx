import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a></li>
          <li>
            <a href="/#About">A propos</a></li>
          <li>
            <a href="/#Projects">Projets</a></li>
          <li>
            <a href="/#Skills">Compétences</a></li>
          <li>
            <a href="/#Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
