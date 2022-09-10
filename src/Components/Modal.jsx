import React, { useState } from 'react';
import '../Components/Modal.css';

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // if (modal) {
  //   document.body.classList.add('active-modal');
  // } else {
  //   document.body.classList.remove('active-modal');
  // }

  return (
    <div>
      <button onClick={toggleModal} className='btn-modal'>
        Ouvrir
      </button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <h2>Hello Modal</h2>
            <p>Modal</p>
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
