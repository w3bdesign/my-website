import React from "react";
import "./ProjectCardMobile.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/background_img.jpg";

type Props = {
  name: string;
  description: string;
  githubLink: string;
  liveProjectLink: string;
  screenshots: string[];
  technologies: string;
};

const ProjectCardMobile: React.FC<Props> = ({
  name,
  description,
  technologies,
  githubLink,
  liveProjectLink,
  screenshots,
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="ProjectCard">
      <div className="project-info">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <p style={{ marginBottom: 0 }}>Built with:</p>
          <p style={{ marginTop: 5 }}>{technologies}</p>
        </div>
        <div className="project-links">
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

      <Slider {...settings}>
        {screenshots.map((screen) => (
          <img className="screenshot" src={screen} />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCardMobile;
