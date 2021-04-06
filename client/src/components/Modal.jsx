import React from 'react';
import './Modal.css'
import { motion } from "framer-motion"

function Modal(props) {
  const {  setShow} = props;
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <motion.div
    initial="hidden"
   animate="visible"
   variants={variants}
   >
    <div className="modal" onClick={(e) => setShow(false)}>
      <div className="modal-children" onClick={(e) => e.stopPropagation()}>
      {props.children}
                   
        
       </div>
      
    </div>
    </motion.div>
  );
}

export default Modal;