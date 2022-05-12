import React from "react";
import "../AboutCard/AboutCard.scss";
import profile from "../../../assets/profile-img.png";

const AboutCard = () => {
  return (
    <>
      <div className="container">
        <div className="profile">
          <div className="image"></div>
          <h1>Joan Gerard</h1>
          <h4>Full Stack Developer | Prince2/Agile and CAPM certified</h4>
          <p>
            As a Full Stack Developer and holder of the Prince2, Prince2 Agile
            and CAPM certifications, I am suited to fulfil specific roles in
            your organisation. I possess the solid experience, education and
            competency needed to work on software development projects.{" "}
          </p>
          <p>
            These certifications, along with my real-life work experience, have
            provided me with a broad efficiency in the use of Agile, Waterfall
            and Hybrid methodologies.
          </p>
          <p>My passions are Technologies | Gaming | Media | Linguistics | Localization | Sustainability</p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
