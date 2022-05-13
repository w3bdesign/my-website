import React from "react";
import "./Home.css";
import TypewriterMessage from "../Typewriter/Typewriter";

const Home = () => {
  return (
    <div className="home-container">
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
