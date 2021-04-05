import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

export default function Login(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className ="loginForm">
    <form  className="form" onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3 className= "login">Login</h3>
      <label className = "label">
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
      <label className = "label">
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
        
      <label className = "label">
          Password:
          <br/>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label >
      <br />
        <Link to='/register'>Don't have an account? Register here.</Link>
        <br/>
      <button className="submit">Submit</button>
      </form>
      </div>
  )
}
