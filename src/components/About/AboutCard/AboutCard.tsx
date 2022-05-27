import React from "react";
import "./AboutCard.scss";

const AboutCard = () => {
  window.addEventListener("scroll", () => {
    navigationVisible(document.querySelector(".profile-image"));
  });

  const navigationVisible = (targetElement: any) => {
    if (window.scrollY > 580) {
      targetElement.classList.add("profile-image-visible");
      return;
    }

    if (
      window.scrollY < 600 &&
      targetElement.classList.contains("profile-image-visible")
    ) {
      targetElement.classList.remove("profile-image-visible");
      return;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <div className="profile-image"></div>
        <div>
          <h1>About Joan</h1>
          {/* <h4>Full Stack Developer | Prince2/Agile and CAPM certified</h4> */}
        </div>
        <p>
          Born in France, I spent most of my adult life in London, UK. During
          the first years there, I worked in the catering and hospitality
          industry. I have always had a passion for languages. That is why I
          went on to study and get my Bachelors and Masters Degrees in
          Translation and Interpreting.
        </p>
        <p>
          After my studies, I started a role as a French Content Editor for a
          media company, where I got to work with international teams. After a
          couple of years at this company, I got my Prince2 Agile and CAPM
          certifications and took on the role of Project Coordinator.
        </p>
        <p>
          I moved to Stockholm, Sweden, in February 2021, to pursue a career in
          software development. I completed an intensive 3-month Full Stack JS
          bootcamp at the School of Applied Technology
        </p>
        {/* <p>
          As a Full Stack Developer and holder of the Prince2, Prince2 Agile and
          CAPM certifications, I am suited to fulfil specific roles in your
          organisation. I possess the solid experience, education and competency
          needed to work on software development projects.{" "}
        </p>
        <p>
          These certifications, along with my real-life work experience, have
          provided me with a broad efficiency in the use of Agile, Waterfall and
          Hybrid methodologies.
        </p> */}
        <p>
          My passions are Technologies | Gaming | Media | Linguistics |
          Localization | Sustainability
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
