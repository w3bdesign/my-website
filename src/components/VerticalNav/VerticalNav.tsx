import React from "react";
import './VerticalNav.css'

const VerticalNav = () => {
  return (
    <div className="wrapper">
      <ul className="menu">
        <li className="list-item">
          <a className="home fa fa-home fa-fw" href="#">
            <span>Home</span>
          </a>
        </li>
        <li className="list-item">
          <a className="about fa fa-info fa-fw" href="#About">
            <span>About</span>
          </a>
        </li>
        <li className="list-item">
          <a className="services fa fa-wrench fa-fw" href="#TechStack">
            <span>Tech Stack</span>
          </a>
        </li>
        <li className="list-item">
          <a className="portfolio fa fa-folder fa-fw" href="#Projects">
            <span>Projects</span>
          </a>
        </li>
        <li className="list-item">
          <a className="contact fa fa-envelope fa-wf" href="#Contact">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNav;
