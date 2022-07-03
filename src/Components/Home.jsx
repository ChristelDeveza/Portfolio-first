import React from 'react'
import picture1 from "../Img/left-and-right-arrows.svg";
import picture2 from "../Img/Binary-Globe.svg";
import "./Home.css";


function Home() {
  return (
    <div className='home' id="Accueil">
      <div className='home-container'>
        <h1 className='home-text'>Bonjour et bienvenue sur mon portfolio</h1>
       </div>
       <img className='home-img' src={picture1} alt="picture"/>
       <img className='home-img2' src={picture2} alt="picture2"/>

    </div>
  )
}

export default Home