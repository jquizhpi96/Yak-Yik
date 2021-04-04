import React from 'react';
import './Modal.css'

function Modal(props) {
  const {  setShow} = props;
  return (
    <div className="modal" onClick={(e) => setShow(false)}>
      <div className="modal-children" onClick={(e) => e.stopPropagation()}>
      {props.children}
                   
        
       </div>
      
    </div>
  );
}

export default Modal;