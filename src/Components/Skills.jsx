import React from 'react';
import PageHeader from './PageHeader';
import './Skills.css';
import imgSkills from '../Img/skills.jpg';

function Skills() {
  const listTitleStyle = {
    fontWeight: 900,
    color: '#9B1FE8',
    marginBottom: '4px',
  };
  const backendSkills = (
    <ul>
      <li style={listTitleStyle}>BACKEND</li>
      <li>Node JS / Express JS</li>
      <li>MySQL</li>
    </ul>
  );

  const frontendSkills = (
    <ul>
      <li style={listTitleStyle}>FRONTEND</li>
      <li>Javascript</li>
      <li>React Js</li>
    </ul>
  );

  const otherSkills = (
    <ul>
      <li style={listTitleStyle}>OTHER SKILLS</li>
      <li>Git - Github</li>
      <li>Méthode SCRUM</li>
      <li>Visual Studio Code</li>
    </ul>
  );

  const totalSkills = [backendSkills, frontendSkills, otherSkills];

  return (
    <div className='skills' id='Skills'>
      <PageHeader title={'Compétences'} />
      
      <div className='skills-container'>
        {/* <img className='img-skills' src={imgSkills} alt='skill-img' /> */}
        <div className='wrap'>
        <div className='cube'>
          <div className='front'>frontend</div>
          <div className='back'>backend</div>
          <div className='top'>top</div>
          <div className='bottom'>bottom</div>
          <div className='left'>soft skills</div>
          <div className='right'>agilité</div>
        </div>
      </div>

        <div className='box-skills'>
          {totalSkills.map((skills) => {
            return <div className='list'>{skills}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
