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
      <li>Git - GIthub</li>
    </ul>
  );

  const totalSkills = [backendSkills, frontendSkills, otherSkills];

  return (
    <div className='skills'>
      <PageHeader title={'What about the skills ?'} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor
        vitae explicabo error et debitis libero temporibus harum minima maiores,
        similique provident ratione ipsam modi atque quaerat nostrum odit
        pariatur!
      </p>
      <div className='skills-container'>
        <img className='img-skills' src={imgSkills} alt='skill-img' />
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
