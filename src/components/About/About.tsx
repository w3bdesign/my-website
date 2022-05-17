import React from "react";
import "./About.scss";
import AboutCard from "./AboutCard/AboutCard";

const About = () => {
  return (
    <div id="About" className="About">
      <h1>About me</h1>

      <AboutCard />
    </div>
  );
};

export default About;
