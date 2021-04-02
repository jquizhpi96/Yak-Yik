import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to='/'><h1>Yak Yik</h1></Link>
        {
          currentUser ?
            <>
               <Link to='/user'>Profile</Link>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/Register</Link>
            
        }
      </header>
    
    </div>
  )
  
}

export default Nav;
