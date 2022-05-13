import React from "react";
import "./TechStackCard.scss";
import typescript from "../../../assets/typescript.svg";
import redux from "../../../assets/redux.svg";
import express from "../../../assets/express.svg";
import next from "../../../assets/next.svg";
import mongo from "../../../assets/mongo.svg";

const TechStackCard = () => {
  return (
    <div className="">
      <div className="techstack">
        <div className="title">
          <h1>Technologies</h1>
        </div>

        <div className="tech-container">
          <div className="html">
            <i className="fab fa-html5 fa-4x"></i>
            <p>HTML</p>
          </div>
          <div className="javascript">
            <i className="fab fa-js fa-4x"></i>
            <p>JavaScript</p>
          </div>
          <div className="typescript">
            <img src={typescript} height="63px" alt="typescript icon" />
            <p>TypeScript</p>
          </div>
          <div className="react">
            <i className="fab fa-react fa-4x"></i>
            <p>ReactJS</p>
          </div>
          <div className="redux">
            <img src={redux} height="63px" alt="redux icon" />
            <p>Redux</p>
          </div>

          <div className="node">
            <i className="fab fa-node-js fa-4x"></i>
            <p>NodeJS</p>
          </div>
          <div className="express">
            <img className="test" src={express} height="40px" width="100px" alt="express icon" />
            <p>Express</p>
          </div>
          <div className="next">
            <img src={next} height="40px" width="100px" alt="next js icon" />
            <p>NextJS</p>
          </div>
          <div className="mongo">
            <img src={mongo} height="40px" width="100px" alt="next js icon" />
            <p>MongoDB</p>
          </div>
          <div className="css">
            <i className="fab fa-css3-alt fa-4x"></i>
            <p>CSS</p>
          </div>
          <div className="git">
            <i className="fab fa-git fa-3x"></i>
            <p>Git</p>
          </div>
          <div className="sass">
            <i className="fab fa-sass fa-4x"></i>
            <p>Sass</p>
          </div>
        </div>
        {/* <div className="div21"> </div> */}
      </div>
    </div>
  );
};

export default TechStackCard;
