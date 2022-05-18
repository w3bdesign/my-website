import { useState } from "react";
import "./Mobile.scss";

const Mobile = () => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  console.log(isActive);

  return (
    <div className="portfolio">
      <div className="background"></div>
      <div className="name">
        <h2>Joan Gerard</h2>
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
      </div>
      <div className="projects">
        <h2>Projects</h2>
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
