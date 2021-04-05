import React from 'react';
import Login from '../../components/Login/Login';
import './Home.css'
import Yak from "../../images/yak.png"


function Home(props) {
  const {handleLogin} = props
  return (
    <div className="home">
      <h1 className="title">Welcome to Yak Yik!</h1>
      <img className="pic"src={Yak} alt="yak"></img>

      <Login 
      handleLogin={handleLogin}/>
    </div>
  );
}

export default Home;