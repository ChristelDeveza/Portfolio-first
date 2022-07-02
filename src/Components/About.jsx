import React from 'react';
import PageHeader from './PageHeader';
import "./About.css";
import me from "../Img/placeholdercat.png";

function About() {
  return (
    <div className='about'>
      <PageHeader title={'A propos'} />
      <div className='about-container'>
        <div className='about-text'>
          <h2>Hello</h2>
          <p>
            Who I am ? I am a programmer Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem nobis voluptate provident, odit doloribus
            laboriosam nulla minima molestias dolores at ad aspernatur facere
            minus delectus! Sint dolores sunt repellat aliquam.
          </p>
        </div>
        <div className="photo">
         <img className="photo-of-me" src={me} alt="photo-of-me" />
        </div>
      </div>
    </div>
  );
}

export default About;
