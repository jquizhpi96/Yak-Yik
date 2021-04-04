import {React} from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'


function Nav(props) {
  const { currentUser, handleLogout } = props;
  
  
return (
    <div className="nav">
      
        {
          currentUser ?
        <ul className="list">
          <li>Welcome {currentUser.name}</li>
          <br/>
          <li><Link to='/users'>Profile</Link></li>
          <br/>
           <li><Link to='/posts'>Post Something?</Link></li>
          <br/>
             <li> <button className ="logout" onClick={handleLogout}>Logout</button></li>
            </ul>
            :
            <Link to='/login'>Login/Register</Link>
            
        }
      
    
    </div>
  )
  
}

export default Nav;
