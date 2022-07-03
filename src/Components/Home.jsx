import React from 'react';
import picture1 from '../Img/left-and-right-arrows.svg';
import picture2 from '../Img/Binary-Globe.svg';
import './Home.css';

function Home() {
  return (
    <div className='home' id='Accueil'>
      <div className='home-container'>
        <h1 className='home-text'>Bonjour et bienvenue sur mon portfolio</h1>
      </div>
      <div class='wrap'>
        <div class='cube'>
          <div class='front'>front</div>
          <div class='back'>back</div>
          <div class='top'>top</div>
          <div class='bottom'>bottom</div>
          <div class='left'>left</div>
          <div class='right'>right</div>
        </div>
      </div>
      <div className='ring-container'>
        <div className='ring'></div>
        <div className='ring'></div>
        <div className='ring'></div>
      </div>
      <div>
        <img className='home-img2' src={picture2} alt='picture2' />
      </div>
    </div>
  );
}

export default Home;
