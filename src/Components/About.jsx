import React from 'react';
import PageHeader from './PageHeader';
import './About.css';
import me from '../Img/placeholdercat.png';

function About() {
  return (
    <div className='about' id="About">
      <PageHeader title={'A propos'} />
      <div className='about-container'>
        <div className='about-text'>
          <h2>Développeuse web</h2>
          <p>
            Je suis actuellement la formation professionnelle certifiante dispensant le titre
            "Développeur web et web mobile" (équivalent Bac +2 et inscrit au
            RNCP), à la Wild Code School de Toulouse. <br/> Compétences visées : Concevoir et développer une application
            web et mobile, intégrer une interface utilisateur. Langages :
            HTML/CSS, Javascript/React.js, Node.js/Express.js.
          </p>
        </div>
        <div className='photo'>
          <img className='photo-of-me' src={me} alt='photo-of-me' />
        </div>
      </div>
    </div>
  );
}

export default About;
