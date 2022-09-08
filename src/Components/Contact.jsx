import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import picture2 from '../Img/Binary-Globe-2.svg';
import PageHeader from './PageHeader';
import './Contact.css';
import world from '../Img/world.jpg';

function Contact() {
  return (
    <div className='contact' id='Contact'>
      <PageHeader title={'Contact'} />
      <h3 className='header-contact'>Christel DEVEZA</h3>
      <p className='header-contact'>Liens vers :</p>
      <div>
        <img className='contact-img2' src={picture2} alt='picture2' />
      </div>
      <div className='icons'>
        <BsLinkedin
          color='white'
          size='30px'
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/christel-deveza-10587a237/'
            )
          }
        />
        <BsGithub
          color='white'
          size='30px'
          onClick={() => window.open('https://github.com/ChristelDeveza')}
        />
      </div>
      <div>
        <img className="img-world" src={world} alt='world' />
      </div>
    </div>
  );
}

export default Contact;
