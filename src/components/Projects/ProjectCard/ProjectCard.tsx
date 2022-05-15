import React from "react";
import "./ProjectCard.scss";

type Props = {
  name: string;
  description: string;
  githubLink: string;
  liveProjectLink: string;
  screenshot: string;
  technologies: string;
};

const ProjectCard: React.FC<Props> = ({
  name,
  description,
  technologies,
  githubLink,
  liveProjectLink,
  screenshot,
}) => {
  return (
    <div className="ProjectCard">
      <div className="project-info">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <p style={{marginBottom: 0}}>Built with:</p>
          <p style={{marginTop: 5}}>{technologies}</p>
        </div>
        <div className="project-links">
          <form action={githubLink}>
            <input type="submit" value="GitHub repo" />
          </form>
          <form action={liveProjectLink}>
            <input type="submit" value="See live" />
          </form>
        </div>
      </div>
      {/* <div className="project-screenshot-container"> */}
        <img className="screenshot" src={screenshot} />
      {/* </div> */}
    </div>
  );
};

export default ProjectCard;
