import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Nav currentUser={currentUser} handleLogout={handleLogout}/>
      {/* {currentUser && (
        <>
          
        </>
      )} */}
      {props.children}
    </div>
  )
}
