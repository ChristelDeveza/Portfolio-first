import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import PageHeader from './PageHeader';
import './Contact.css';

function Contact() {
  return (
    <div className='contact' id='Contact'>
      <PageHeader title={'Contact'} />
      <div className='icons'>
      <BsLinkedin
        color='white'
        size='30px'
        onClick={() =>
          window.open('https://www.linkedin.com/in/christel-deveza-10587a237/')
        }
      />
      <BsGithub
        color='white'
        size='30px'
        onClick={() => window.open('https://github.com/ChristelDeveza')}
      />
      </div>
    </div>
  );
}

export default Contact;
