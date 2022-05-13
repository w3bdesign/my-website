import React from "react";
import "./VerticalNav.scss";

const VerticalNav = () => {
  return (
    <div className="navigation">
      <ul className="share-icons">
      {/* eslint-disable-next-line */}
        <a href="#">
          <li className="share-icons__item">
            <i className="fa fa-home text-black"></i>
          </li>
        </a>
        <a href="#About">
          <li className="share-icons__item">
            <i className="fa fa-user-circle text-black"></i>
          </li>
        </a>
        <a href="#TechStack">
          <li className="share-icons__item">
            <i className="fa fa-wrench text-black"></i>
          </li>
        </a>
        <a href="#Projects">
          <li className="share-icons__item">
            <i className="fa fa-folder text-black"></i>
          </li>
        </a>
        <a href="#Contact">
          <li className="share-icons__item">
            <i className="fa fa-envelope text-black"></i>
          </li>
        </a>
        <li className="share-icons__block">
          <div className="share-icons__block-top">
            <i className="fas fa-bars text-primary"></i>
          </div>
          <div className="share-icons__block-bottom">
            <i className="fas fa-bars text-primary"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNav;
