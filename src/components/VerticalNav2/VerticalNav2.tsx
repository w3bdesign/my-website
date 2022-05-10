import React from "react";
import "./VerticalNav2.css";

const VerticalNav2 = () => {
  return (
    <div className="wrapper2">
      <ul className="menu2">
        <li>
          <a href="#">
            <i className="fab fa-facebook" aria-hidden="true"><span>Home</span></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNav2;
