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
        <p>French Full Stack JS Devloper, now based in Stockholm.</p>
      </div>
      <div className="socials">
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
      </div>
    </div>
  );
};

export default Mobile;
