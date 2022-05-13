import React from "react";
import "./Home.css";
import TypewriterMessage from "../Typewriter/Typewriter";
import logo from '../../assets/logo.png'

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="logo" className="logo" />
      <TypewriterMessage />
      {/* <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </div> */}
    </div>
  );
};

export default Home;
