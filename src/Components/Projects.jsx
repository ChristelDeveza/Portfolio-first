import React from 'react';
import PageHeader from './PageHeader';
import './Projects.css';
import vague from '../Img/vague.jpg';

function Projects() {
  const projectsList = (title, picture, url, githuburl, description) => {
    return (
      <div className='project-container'>
        <div>{title}</div>

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

  const project1 = 'Projet 1';
  const projectDescription = 'lorem ipsum';

  return (
    <div className='projects'>
      <PageHeader title={'My project'} />
      <div className='projects-content'>
        <div className='paragraph'></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          maxime unde odit cum repudiandae quos officiis fugiat nulla laboriosam
          vero dicta, delectus nemo esse harum nobis, repellendus voluptates
          assumenda architecto.
        </p>
      </div>
      <div className='one-project'>
        {projectsList(
          project1,
          vague,
          'https://unsplash.com/',
          'https://unsplash.com/',
          projectDescription
        )}
        {projectsList(
          project1,
          vague,
          'https://unsplash.com/',
          'https://unsplash.com/',
          projectDescription
        )}
        {projectsList(
          project1,
          vague,
          'https://unsplash.com/',
          'https://unsplash.com/',
          projectDescription
        )}
      </div>
    </div>
  );
}

export default Projects;
