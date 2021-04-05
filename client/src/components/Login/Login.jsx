import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

export default function Login(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
   
   
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
  const refresh = () => {
    setFormData({ isError: false, name:"",email: "" , password: ""});
  };

  if (!formData )  {
    setFormData({
     
      isError: true,
      errorMsg: "Invalid Credentials",
      password: "",
     
    });
    setTimeout(refresh, 1500)
  }
  // debugger 
  const renderError = () => {
    const toggleForm = formData.isError ? "danger" : "";
    if (formData.isError){
      return (
        
        <button className={toggleForm}>
          {formData.errorMsg}
        </button>
      )
    } else if (!name) {
      return <p className="name-error">Please Enter Your Name</p>;
    } else if (!password) {
      return <p className="password-error">Please Enter Password</p>;
    } else if (email.includes("@") !== true) {
      return <p className="email-error">Invalid Email - must include @</p>;
    } else {
      return <button className="submit" >Log In</button>;
    }
    
  }
  
  return (
    <div className={formData.isError ? "sign-in-error" : "loginForm"}>
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
        {renderError()}
     
        <Link to='/register'>Don't have an account? Register here.</Link>
        <br/>
        {/* <button className="submit">Submit</button> */}
        
      </form>
      </div>
  )
}
