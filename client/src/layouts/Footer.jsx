import {React} from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'


function Footer(props) {
  const { currentUser, handleLogout } = props;
  
  // let newName = currentUser.name.split(' ').map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
  
return (
    <div className="footer">
      

        <ul className="footer-list">
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

export default Footer;
