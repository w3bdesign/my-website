import { useState } from "react";
import "./Mobile.scss";
import typescript from "../../assets/typescript.svg";
import redux from "../../assets/redux.svg";
import express from "../../assets/express.svg";
import next from "../../assets/next.svg";
import mongo from "../../assets/mongo.svg";
import ProjectsMobile from "../ProjectsMobile/ProjectsMobile";

const Mobile = () => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  console.log(isActive);

  return (
    <div className="portfolio">
      <div className="background">
        <div className="name">
          <h2>Joan Gerard</h2>
        </div>
      </div>
      <div
        id="hamburger"
        className={isActive ? "active" : ""}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="about">
        <h2>FRENCH FULL STACK JS DEVELOPER, NOW BASED IN STOCKHOLM</h2>
        <p>
          As a Full Stack Developer and holder of the Prince2, Prince2 Agile and
          CAPM certifications, I am suited to fulfil specific roles in your
          organisation. I possess the solid experience, education and competency
          needed to work on software development projects.
        </p>
        <p>
          These certifications, along with my real-life work experience, have
          provided me with a broad efficiency in the use of Agile, Waterfall and
          Hybrid methodologies.
        </p>
      </div>
      <div className="technologies">
        <h2>Technologies</h2>
        <p className="techstack-headline">
          Here are some of the technologies, languages or applications that I
          mostly use and have used for my personal projects
        </p>
        <div className="tech-stack">
          <div>
            <i className="fab fa-html5 fa-2x"></i>
            <i className="fab fa-css3-alt fa-2x"></i>

            <i className="fab fa-js fa-2x"></i>
            <img src={typescript} height="30px" alt="typescript icon" />
            <i className="fab fa-node-js fa-2x"></i>
          </div>
          <div>
            <i className="fab fa-react fa-2x"></i>
            <i className="fab fa-git fa-2x"></i>
            <i className="fab fa-sass fa-2x"></i>

            <img src={redux} height="30px" alt="redux icon" />
          </div>
          <div>
            <img
              className="test"
              src={express}
              height="30px"
              width="100px"
              alt="express icon"
            />
            <img src={next} height="30px" width="100px" alt="next js icon" />
            <img src={mongo} height="30px" width="100px" alt="next js icon" />
          </div>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        {/* <ProjectsMobile /> */}
      </div>
      {/* <div className="socials">
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joangerard/"
          >
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-linkedin fa-stack-1x"></i>
            </span>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/joan-gerard"
          >
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x"></i>
            </span>
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="mailto:joan.gerard@outlook.com">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-envelope-open fa-stack-1x"></i>
            </span>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Mobile;
