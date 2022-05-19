import React from "react";
import "./ProjectCardMobile.scss";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
  return (
    <div className="ProjectCard">
      <div className="project-info">
        <div>
          <h2>{name}</h2>
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
      {/* <div className="carouselContainer"> */}
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={screenshots.length}
        visibleSlides={1}
      >
        <Slider className="slider">
          {screenshots.map((screen) => (
            <div className="test">
              <img className="screenshot" src={screen} />
            </div>
          ))}
        </Slider>
        <div className="buttonsContainer">
          <ButtonBack className="buttonBack">
            <i className="fa fa-arrow-circle-left fa-3x"></i>
          </ButtonBack>
          <ButtonNext className="buttonNext">
            <i className="fa fa-arrow-circle-right fa-3x"></i>
          </ButtonNext>
        </div>
      </CarouselProvider>
      {/* </div> */}
    </div>
  );
};

export default ProjectCardMobile;
