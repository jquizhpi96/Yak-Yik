import React from 'react';
import Nav from './Nav';
import './Layout.css'
import { Link } from 'react-router-dom';
import Yak from "../images/yak.png"
import { motion } from "framer-motion"
import Footer from './Footer';


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
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
    <div className="layout">
          
        <Link to='/posts'><h1 className="header">Yak Yik</h1>
        <img className = "yak"src={Yak} alt="yak"></img>
        </Link>
        
      {currentUser && (
            <div className = "name">Welcome { currentUser.name.charAt(0).toUpperCase()}</div>
          )}
     
      <Nav className="navbar" currentUser={currentUser} handleLogout={handleLogout}/>
      
      <div className="children">{props.children}

      </div>
     <Footer currentUser={currentUser} handleLogout={handleLogout}/>
      </div>
      </motion.div>
  )
}
