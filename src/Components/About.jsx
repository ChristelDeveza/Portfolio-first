import React from 'react';
import PageHeader from './PageHeader';
import './About.css';

function About() {
  return (
    <div className='about' id='About'>
      <PageHeader title={'A propos'} />
      <div className='about-container'>
        <div className='about-text'>
          <h2>Développeuse web</h2>
          <p>
            De formation juridique, j’ai exercé pendant seize ans le métier de
            notaire assistant. Ouverte aux nouvelles technologies, je
            m’intéresse depuis quelques années aux métiers de l’informatique et
            du numérique. <br />
            <br />
            Décidée à orienter ma carrière vers ce domaine, j’ai suivi la
            formation de développeur web et web mobile dispensée par la Wild
            Code School de Toulouse, de février à juillet 2022, afin d’acquérir
            les compétences requises. <br />
            <br />
            La formation professionnelle est orientée vers la pratique afin de
            répondre au mieux aux besoins des entreprises. Elle permet d'obtenir
            le titre "Développeur web et web mobile" (équivalent Bac +2 et
            inscrit au RNCP). <br /> <br />
            Compétences visées : Concevoir et développer une application web et
            mobile, intégrer une interface utilisateur. <br /> <br /> Langages :
            HTML/CSS, Javascript/React.js, Node.js/Express.js. <br />
            <br />
            Vous trouverez ci-après les divers projets réalisés ou en cours de
            réalisation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
