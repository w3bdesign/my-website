import React from "react";
import "./TechStack.scss";
import TechStackCard from "./TechStackCard/TechStackCard";

const TechStack = () => {
  return (
    <div id="TechStack" className="TechStack">
      <h1>Technologies</h1>

      <TechStackCard />
    </div>
  );
};

export default TechStack;
