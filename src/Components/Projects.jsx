import React from 'react';
import PageHeader from './PageHeader';
import './Projects.css';
import { FaArrowDown } from 'react-icons/fa';
import nope from '../Img/Nope.png';
import firme from '../Img/Firme.png';
import hackathon from '../Img/Hackathon.png';
import sport from '../Img/Sport.png';
import Modal from '../Components/Modal';

function Projects() {
  const projectsList = (title, picture, url, githuburl, description) => {
    return (
      <div className='project-container' id='Projects'>
        <div className='project-box-before-description'>
          <div className='project-title'>{title}</div>
          <div className='picture'>
            <div class='flip-box'>
              <div class='flip-box-inner'>
                <div class='flip-box-front'>
                  <img src={picture} alt='picture' />
                </div>
                <div class='flip-box-back'>
                  <p className='text-back'>Cliquez sur le ou les liens</p>
                  <FaArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div>{url}</div>
          <div>{githuburl}</div>
        </div>
        <div className='text'>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  const project1 = <p>Nope, votre alibi en trois clics</p>;
  const projectDescription1 = (
    <p className='text-description'>
      Ce site dynamique a été réalisé en React Js, dans le cadre de ma formation
      à la Wild Code School. <br />
      <br />
      <li>Travail en équipe de quatre personnes,</li>
      <li>
        Pratiques SCRUM : daily meetings, présentation client à chaque fin de
        sprint, rétrospective, product et sprint blacklogs,
      </li>
      <li>Utilisation d'un workflow Git/GitHub,</li>
      <li>
        Clean code, relecture du code et standards respectés lors des pull
        request (ESLint, Prettier),
      </li>
      <li>
        Site réalisé avec create vite @latest : utilisation de React router,
        hooks et props,
      </li>
      <li>Appel d`API,</li> <li>Utilisation de Leaflet,</li>
      <li>Site développé en format mobile uniquement.</li>
    </p>
  );

  const project2 = <p>La Firme : plateforme de mise en relation d'affaire</p>;
  const projectDescription2 = (
    <p className='text-description'>
      Le project consiste en la création d’un prototype de plateforme web de
      mise en relation entre adhérents de La Firme, réseau d’affaire, réalisé
      dans le cadre de ma formation à la Wild Code School.
      <br />
      <br />
      <li>
        Besoins et fonctionalités élaborés en collaboration avec le porteur de
        projet,
      </li>
      <li>Charte graphique fournie par le porteur de projet,</li>
      <li>Travail en équipe de quatre personnes,</li>
      <li>
        Pratiques SCRUM : daily meetings, présentation client à chaque fin de
        sprint, rétrospective, product et sprint blacklogs,
      </li>
      <li>Utilisation d'un workflow Git/GitHub,</li>
      <li>
        Clean code, relecture du code et standards respectés lors des pull
        request (ESLint, Prettier).
      </li>
      <li>
        À partir de la liste des principales fonctionnalités demandées par le
        porteur de projet, définition des user stories, wireframes et
        modélisation de la base de données selon la méthode Merise,
      </li>
      <li>
        Site dynamique réalisé en React Js avec create vite@latest pour la
        partie frontend. Utilisation de React router, hooks et props,
        <li>Backend réalisé avec Express Js sur modèle MVC,</li>
      </li>{' '}
      <li>Site développé en format desktop uniquement,</li>
      <li>Utilisation de json web token.</li>
    </p>
  );

  const project3 = (
    <p>
      Hackathon juin 2022 - Wild Code School
      <br /> Créer un outil de collaboration inter-agence
    </p>
  );
  const projectDescription3 = (
    <p className='text-description'>
      Sujet du hackathon : développer une application de type plateforme
      collaborative en 48h.
      <br /> <br />
      Equipe de quatre personnes. <br />
      <br />
      <li>Application réalisée en React Js avec create react app.</li>
    </p>
  );

  const project4 = (
    <p>
      Fit N Cheap Club <br /> Site internet d'une salle de sport
    </p>
  );
  const projectDescription4 = (
    <p className='text-description'>
      Projet personnel de site internet de salle de sport présenté dans le cadre
      de ma formation à la Wild Code School. <br /> <br />
      Objectif : Concevoir et développer une application web et mobile.
      <br /> <br />
      Ce projet est en cours de construction et d'amélioration.
      <br />
      <br />
      Le développement de l'application a été réalisé selon trois axes
      principaux :{' '}
      <li>la présentation de la salle de sport et de son offre,</li>{' '}
      <li>la création d'un compte utilisateur (en cours),</li>
      <li>la création d'un compte administrateur (à venir).</li>
      <br />
      Stack technique :
      <li>
        Site dynamique réalisé en React Js avec create vite@latest pour la
        partie frontend. Utilisation de React router, hooks (useState,
        useEffect, useContext, useNavigate) et props,
        <li>Backend réalisé avec Express Js sur modèle MVC,</li>
        <li>Modélisation de la base de données selon la méthode Merise,</li>
        <li>Utilisation de json web token et du localstorage.</li>
      </li>{' '}
    </p>
  );
  return (
    <div className='projects'>
      <PageHeader title={'Mes projets'} />

      <div className='projects-content'>
        <div className='paragraph'></div>
      </div>
      <div className='one-project'>
        {projectsList(
          project4,
          sport,
          <a href='https://sportfitncheapclub.netlify.app/'>
            Site internet : Fit N Cheap Club (partie front-end)
          </a>,
          <a href='https://github.com/ChristelDeveza/Projet4'>
            Lien Github du projet
          </a>,
          projectDescription4
        )}
        {projectsList(
          project1,
          nope,
          <a href='https://p3-2109-nope-front.toulouse-1.wilders.dev/'>
            Site internet : Nope !
          </a>,
          <a href='https://github.com/WildCodeSchool/2022-03-JS-Toulouse-project-2-culture'>
            Lien Github du projet
          </a>,
          projectDescription1
        )}
        {projectsList(
          project2,
          firme,
          <div className='captures'>
            <p>Captures d'écrans du site</p>
            <Modal />
          </div>,
          null,
          projectDescription2
        )}
        {projectsList(
          project3,
          hackathon,
          null,
          <a href='https://github.com/ChristelDeveza/hackathon'>
            Lien Github du projet
          </a>,
          projectDescription3
        )}
      </div>
    </div>
  );
}

export default Projects;
