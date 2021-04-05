import {React} from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'


function Nav(props) {
  const { currentUser, handleLogout } = props;
  
  // let newName = currentUser.name.split(' ').map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
  
return (
    <div className="nav">
      

        <ul className="list">
          {/* {currentUser && (
            <li>Welcome { currentUser.name.charAt(0).toUpperCase()}</li>
          )} */}
          <br/>
          <li><Link to='/users'>Profile</Link></li>
          <br/>
           <li><Link to='/post/new'>Post Something?</Link></li>
          <br/>
             <li> <button className ="logout" onClick={handleLogout}>Logout</button></li>
         
            </ul>
            {/* :
            <Link to='/'>Login/Register</Link> */}
            
        
      
    
    </div>
  )
  
}

export default Nav;
