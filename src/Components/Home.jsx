import React from 'react';
import picture1 from '../Img/left-and-right-arrows.svg';
// import picture2 from '../Img/Binary-Globe.svg';
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
      
     
      {/* <div>
        <img className='home-img2' src={picture2} alt='picture2' />
      </div> */}
    </div>
  );
}

export default Home;
