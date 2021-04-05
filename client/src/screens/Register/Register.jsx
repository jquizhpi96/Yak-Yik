import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css'
import Yak from "../../images/yak.png"

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { name, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="register-container">
      
      <Link className="link3"to="/" ><img  className="pic2"src={Yak} alt="yak"></img></Link>
      <div className ="register-form">
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleRegister(formData);
    }}>
      <h3 className = "register">Register</h3>
      <label>
            Name:
                 <br/>
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
            Email:
            <br/>
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
            Password:
            <br/>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="submit">Submit</button>
        </form>
        </div>
      </div>
  )
}
