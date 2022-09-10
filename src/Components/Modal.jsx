import React, { useEffect, useRef, useState } from 'react';
import '../Components/Modal.css';
import PageConnexion from '../Img/Firme-captions/1Pagedeconnexion.png';
import Dashboard from '../Img/Firme-captions/2 Page Dashboard.png';
import Stats from '../Img/Firme-captions/3 Page statistiques.png';
import Modif from '../Img/Firme-captions/4 Page modification des données utilisateur.png';
import ModifPwd from '../Img/Firme-captions/5 Page modification mot de passe par utilisateur.png';
import Creation from '../Img/Firme-captions/6 Page création de compte admin.png';
import Nav from '../Img/Firme-captions/7 Barre de navigation dépliée.png';
import Search from '../Img/Firme-captions/8 Page recherche admin.png';
import Export from '../Img/Firme-captions/9 Page CSV Import admin.png';

function Modal() {
  const [modal, setModal] = useState(false);
  
  const toggleModal = () => {
    setModal(!modal);
  };

  const images = [
    {
      title: '1-Page de connexion',
      url: (
        <div>
          {' '}
          <img
            className='img-firme'
            src={PageConnexion}
            alt='page connexion'
          />{' '}
        </div>
      ),
    },
    {
      title: '2-Page dashboard',
      url: (
        <div>
          {' '}
          <img className='img-firme' src={Dashboard} alt='dashboard' />
        </div>
      ),
    },
    {
      title: '3-Page statistique',
      url: (
        <div>
          <img className='img-firme' src={Stats} alt='stats' />
        </div>
      ),
    },
    {
      title: '4-Page modification des données utilisateurs',
      url: (
        <div>
          <img className='img-firme' src={Modif} alt='modification du compte' />
        </div>
      ),
    },
    {
      title: '5-Page modification du mot de passe',
      url: (
        <div>
          <img className='img-firme' src={ModifPwd} alt='Modification pwd' />
        </div>
      ),
    },
    {
      title: '6-Page création de compte admin',
      url: (
        <div>
          {' '}
          <img className='img-firme' src={Creation} alt='création de compte' />
        </div>
      ),
    },
    {
      title: '7-Barre de navigation dépliée',
      url: (
        <div>
          <img className='img-firme' src={Nav} alt='barre de navigation' />
        </div>
      ),
    },
    {
      title: '8-Page recherche admin',
      url: (
        <div>
          <img className='img-firme' src={Search} alt='recherche' />
        </div>
      ),
    },
    {
      title: '9-Page CSV export admin',
      url: (
        <div>
          <img className='img-firme' src={Export} alt='export CSV' />
        </div>
      ),
    },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      3500
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
      <button onClick={toggleModal} className='btn-modal'>
        Ouvrir
      </button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='cover'></div>

          <div className='modal-content'>
            <div className='slideshow'>
              <div
                className='slideshowSlider'
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {images.map((image, index) => (
                  <div className='slide' key={index}>
                    <p style={{color: "black"}}>{image.title}</p>
                    {image.url}
                  </div>
                ))}
              </div>
              <div className='slideshowDots'>
                {images.map((_, idx) => (
                  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? ' active' : ''}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  />
                ))}
              </div>
            </div>
            <button className='close-modal' onClick={toggleModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
