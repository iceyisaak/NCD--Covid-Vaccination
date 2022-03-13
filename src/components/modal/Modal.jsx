import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';


const Modal = (props) => {

  const { isModalOpen, handleModalOpen, children } = props;

  if (!isModalOpen) {
    return null;
  } else {

    return createPortal(

      <>
        <div className="overlay" onClick={handleModalOpen}></div>
        <div className='modal'>
          <div>
            <div className="btn-close" onClick={handleModalOpen}>X</div>
            <div className="modal-content">
              {children}
            </div>
          </div>
        </div>
      </>
      , document.getElementById('modal')
    );
  }
};

export default Modal;