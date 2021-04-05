import {React} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'



function Footer(props) {
  const { handleLogout } = props;

  
 
  const home = <FontAwesomeIcon className="footer-icon" icon={faHome} size="lg" />
  const user = <FontAwesomeIcon className= "footer-icon" icon={faUser} size="lg"/>
  const  note= <FontAwesomeIcon className= "footer-icon" icon={faStickyNote} size="lg"/>
  const  signOut= <FontAwesomeIcon className= "footer-icon" icon={faSignOutAlt} size="lg"/>

return (
    <div className="footer">
      
  
        <ul className="footer-list">
          
      
      <li><Link to='/posts'>{home}</Link></li>
      <li><Link to='/users'>{user}</Link></li>
         
      <li><Link to='/post/new'>{note}</Link></li>
       
      <li> <button className="logout" onClick={handleLogout}>{signOut}</button></li>
         
            </ul>
           
        
      
    
    </div>
  )
  
}

export default Footer;
