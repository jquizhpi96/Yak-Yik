import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>
        name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
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
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/register'>Register</Link>
      <button>Submit</button>
    </form>
  )
}
