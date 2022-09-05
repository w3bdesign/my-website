import React from "react";
import "./TechStackCard.scss";
import typescript from "../../../assets/typescript.svg";
import redux from "../../../assets/redux.svg";
import html5 from "../../../assets/html5.svg";
import js from "../../../assets/js.svg";
import react from "../../../assets/react.svg";
import node from "../../../assets/node-js.svg";
import css from "../../../assets/css3-alt.svg";
import git from "../../../assets/git-alt.svg";
import apollo from "../../../assets/apollo.svg";
import sass from "../../../assets/sass.svg";
import graphql from "../../../assets/graphql.svg";
import svelte from "../../../assets/svelte.svg";
import express from "../../../assets/express.svg";
import next from "../../../assets/next.svg";
import mongo from "../../../assets/mongo.svg";

const TechStackCard = () => {
  return (
    <div className="technologies">
      <div className="techstack-headline">
        Here are some of the technologies, languages or applications that I
        mostly use and have used for my personal projects
      </div>
      <div className="tech-container">
        <div className="html">
          <img src={html5} height="63px" alt="html icon" />
          <p>HTML</p>
        </div>
        <div className="javascript">
          <img src={js} height="63px" alt="javascript icon" />
          <p>JavaScript</p>
        </div>
        <div className="typescript">
          <img src={typescript} height="60px" alt="typescript icon" />
          <p>TypeScript</p>
        </div>
        <div className="react">
          <img src={react} height="63px" alt="typescript icon" />
          <p>ReactJS</p>
        </div>
        <div className="apollo">
          <img src={apollo} height="63px" alt="apollo icon" />
          <p>Apollo</p>
        </div>
        <div className="graphql">
          <img src={graphql} height="63px" alt="graphql icon" />
          <p>Graphql</p>
        </div>
        <div className="redux">
          <img src={redux} height="63px" alt="redux icon" />
          <p>Redux</p>
        </div>

        <div className="node">
          <img src={node} height="63px" alt="node icon" />
          <p>NodeJS</p>
        </div>
        <div className="css">
          <img src={css} height="63px" alt="css icon" />
          <p>CSS</p>
        </div>
        <div className="git">
        <img src={git} height="63px" alt="git icon" />
          <p>Git</p>
        </div>
        <div className="sass">
        <img src={sass} height="63px" alt="sass icon" />
          <p>Sass</p>
        </div>
        <div className="svelte">
          <img src={svelte} height="63px" alt="svelte icon" />
          <p>Svelte</p>
        </div>
        <div className="express">
          <img
            className="test"
            src={express}
            height="40px"
            width="100px"
            alt="express icon"
          />
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

      </div>
    </div>
  );
};

export default TechStackCard;
