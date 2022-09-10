import React from 'react';
import PageHeader from './PageHeader';
import './About.css';

function About() {
  return (
    <div className='about' id='About'>
      <PageHeader title={'A propos'} />
      <div className='about-container'>
        <div className='about-text'>
          <h4>Je m'appelle Christel, Développeuse web.</h4>
          <p>
            De formation juridique, j’ai exercé pendant seize ans le métier de
            notaire assistant. Vivement interessée par l’informatique et le
            numérique, j'ai décidé d'orienter ma carrière vers ce domaine.
            <br /> <br /> Afin d’acquérir les compétences requises, j’ai suivi
            la formation de développeur web et web mobile dispensée par la Wild
            Code School de Toulouse, de février à juillet 2022. <br />
            <br />
            La formation professionnelle est orientée vers la pratique afin de
            répondre au mieux aux besoins des entreprises. <br />
            Compétences visées : Concevoir et développer une application web et
            mobile, intégrer une interface utilisateur. <br />Langages :
            HTML/CSS, Javascript/React.js, Node.js/Express.js.
            <br />
            Elle permet d'obtenir le titre "Développeur web et web mobile"
            (équivalent Bac +2 et inscrit au RNCP). <br />
            <br />
            Vous trouverez ci-après les divers projets réalisés ou en cours de
            réalisation (individuellement ou en équipe).
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
