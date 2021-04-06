import React from "react";
import Login from "../../components/Login/Login";
import "./Home.css";
import Yak from "../../images/yak.png";
import {  motion } from "framer-motion";

function Home(props) {
  const { handleLogin, currentUser} = props;
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    >
    <div className="home">
      <h1 className="title">Welcome to Yak Yik!</h1>
      <img className="pic" src={Yak} alt="yak"></img>

        <Login handleLogin={handleLogin} currentUser={currentUser} />
      </div>
      </motion.div>
  );
}

export default Home;
