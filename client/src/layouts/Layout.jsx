import React from 'react';
import Nav from './Nav';
import './Layout.css'
import { Link } from 'react-router-dom';
import Yak from "../images/yak.png"


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout">
      
      <Link to='/posts'><h1 className="header">Yak Yik</h1>
        <img className = "yak"src={Yak} alt="yak"></img>
      </Link>
     
      <Nav className="navbar" currentUser={currentUser} handleLogout={handleLogout}/>
      
      <div className="children">{props.children}

      </div>
     
    </div>
  )
}
