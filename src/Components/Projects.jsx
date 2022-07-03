import React from 'react';
import PageHeader from './PageHeader';
import './Projects.css';
import vague from '../Img/vague.jpg';
import nope from '../Img/Nope.png';
import firme from '../Img/Firme.png';

function Projects() {
  const projectsList = (title, picture, url, githuburl, description) => {
    return (
      <div className='project-container' id="Projects">
        <div className='project-title'>{title}</div>

        <div className='picture'>
          <div class='flip-box'>
            <div class='flip-box-inner'>
              <div class='flip-box-front'>
                <img src={picture} alt='picture' />
              </div>
            </div>
          </div>
        </div>
        <div>{url}</div>
        <div>{githuburl}</div>
        <div className='text'>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  const project1 = <p>Nope, votre alibi en trois clics</p>;
  const projectDescription1 =
   <p className='text-description'>Ce site dynamique a été réalisé en React Js avec create vite@latest, dans le cadre de ma formation à la Wild Code School. React router, les hooks et les props ont été utilisés. Le site contient un appel d`API effectué avec axios et a nécessité l`intégration d`une carte, l`API utilisée faisant appel à des coordonnées géographiques. Pour ce faire, il a été utilisé Leaflet. Le site a été développé en format mobile uniquement. Le travail a été réalisé en équipe de quatre personnes, avec mise en pratique de la méthode SCRUM : daily meetings, présentation client à chaque fin de sprint, rétrospective, product et sprint blacklogs. Il a été Utilisé un workflow Git/GitHub. Il a été appliqué le clean code : relecture du code et standards respectés lors des pull requests (ESLint, Prettier).</p>;

  const project2 = <p>La Firme : plateforme de mise en relation</p>;
  const projectDescription2 = <p>Création d’un prototype de plateforme web de mise en relation entre adhérents de La Firme, réseau d’affaire, pour un porteur de projet réel (8 semaines)  -  en cours. <br/> À partir de la liste des principales fonctionnalités demandées par le porteur de projet, il a été défini les user stories, wireframes et modélisation de la base de données selon la méthode Merise. Ce site dynamique a été réalisé en React Js avec create vite@latest, dans le cadre de ma formation à la Wild Code School. React router, les hooks et les props ont été utilisés. Le site a été développé en format desktop pour le moment. Le travail est réalisé en équipe de quatre personnes, avec mise en pratique de la méthode SCRUM : daily meetings, présentation client à chaque fin de sprint, rétrospective, product et sprint blacklogs. Il a été Utilisé un workflow Git/GitHub. Il a été appliqué le clean code : relecture du code et standards respectés lors des pull requests (ESLint, Prettier).</p>;

  return (
    <div className='projects'>
      <PageHeader title={'Mes projets'} />
      <div className='projects-content'>
        <div className='paragraph'></div>
      </div>
      <div className='one-project'>
        {projectsList(
          project1,
          nope,
          <a href='https://p3-2109-nope-front.toulouse-1.wilders.dev/'>Site internet : Nope !</a>,
          <a href='https://github.com/WildCodeSchool/2022-03-JS-Toulouse-project-2-culture'>Lien Github du projet</a>,
          projectDescription1
        )}
        {projectsList(
          project2,
          firme,
          null,
          <a href='https://github.com/WildCodeSchool/2022-03-JS-Toulouse-project-3-lafirme'>Lien Github du projet</a>,
          projectDescription2
        )}
        
      </div>
    </div>
  );
}

export default Projects;
