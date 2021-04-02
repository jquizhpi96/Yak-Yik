import React from 'react';

function Modal(props) {
  const {  setShow} = props;
  return (
    <div onClick={(e) => setShow(false)}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
      {props.children}
                   
        
       </div>
      
    </div>
  );
}

export default Modal;