import React from "react";
import "./TechStackCard.scss";
import typescript from '../../../assets/typescript.svg'
import redux from '../../../assets/redux.svg'
import express from '../../../assets/express.svg'

const TechStackCard = () => {
  return (
    <div className="">
      <div className="techstack">
        <h1>Technologies</h1>
        <ul className="tech-list">
          <li className="tech-list__item">
            <i className="fab fa-html5 fa-5x"></i>
            <p>HTML</p>
          </li>
          <li className="tech-list__item">
            <i className="fab fa-css3-alt fa-5x"></i>
            <p>CSS</p>
          </li>
          <li className="tech-list__item">
            <i className="fab fa-js fa-5x"></i>
            <p>JavaScript</p>
          </li>
          <li className="tech-list__item">
              <img src={typescript} height="78px" alt="typescript icon" />
            <p>TypeScript</p>
          </li>
          <li className="tech-list__item">
            <i className="fab fa-node-js fa-5x"></i>
            <p>NodeJS</p>
          </li>
          <li className="tech-list__item">
            <i className="fab fa-react fa-5x"></i>
            <p>ReactJS</p>
          </li>
          <li className="tech-list__item">
          <img src={redux} height="78px" alt="redux icon" />
            <p>Redux</p>
          </li>
          <li className="tech-list__item">
            <i className="fab fa-sass fa-5x"></i>
            <p>Sass</p>
          </li>
          <li className="tech-list__item">
          <img src={express} height="78px" width="78px" alt="express icon" />
            <p>Express</p>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default TechStackCard;
