import React from "react";
import "./VerticalNav2.css";

const VerticalNav2 = () => {
  return (
    <div className="wrapper2">
      <ul className="menu2">
        <li>
          <a target="_blank" href="mailto:joan.gerard@outlook.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li>
        <a target="_blank" href="https://www.linkedin.com/in/joangerard/">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/joan-gerard">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNav2;
