import React from "react";
import "./ProjectCard.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  name: string;
  description: string;
  githubLink: string;
  liveProjectLink: string;
  screenshots: string[];
  technologies: string[];
};

const ProjectCard: React.FC<Props> = ({
  name,
  description,
  technologies,
  githubLink,
  liveProjectLink,
  screenshots,
}) => {
  var settings = {
    // autoplay: true,
    // autoplaySpeed: 2000,
    // infinite: true,

    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="project-card">
      <Slider {...settings}>
        {screenshots.map((screen, idx) => (
          <img key={idx} className="screenshot" src={screen} alt="" />
        ))}
      </Slider>

      <div className="project-desc">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="project-technologies">
            {/* <p style={{ marginBottom: 0 }}>Built with:</p> */}
            {technologies.map((tech, idx) => (
              <p key={idx}>{tech}</p>
            ))}
          </div>
        </div>
        <div className="project-links">
          {/* <p style={{ marginTop: 5 }}>{technologies}</p> */}
          <div className="project-nav">
            <form className="goToGitHub" action={githubLink}>
              <input
                className="goToGitHub-btn"
                type="submit"
                value="GitHub repo"
              />
            </form>
            <form
              className={`goToLive ${
                liveProjectLink.length ? "" : "goToLive__hidden"
              }`}
              action={liveProjectLink}
            >
              <input className="goToLive-btn" type="submit" value="See live" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
