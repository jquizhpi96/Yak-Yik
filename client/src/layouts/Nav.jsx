import {React} from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'


function Nav(props) {
  const {  handleLogout } = props;
  
  
return (
    <div className="nav">
      

        <ul className="list">
         
          <br/>
          <li><Link to='/users'>Profile</Link></li>
          <br/>
           <li><Link to='/post/new'>Post Something?</Link></li>
          <br/>
             <li> <button className ="logout" onClick={handleLogout}>Logout</button></li>
         
            </ul>
            
            
        
      
    
    </div>
  )
  
}

export default Nav;
