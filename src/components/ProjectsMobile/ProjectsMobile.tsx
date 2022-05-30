import { useState, useEffect } from "react";
import projects from "../../projects.json";
import { ProjectType } from "../../../interface";
import ProjectCardMobile from "./ProjectCardMobile/ProjectCardMobile";
import "./ProjectsMobile.scss";

type Props = {
  allProjects: ProjectType[];
};

const ProjectsMobile: React.FC<Props> = ({ allProjects }) => {
  return (
    <div className="projects">
      <div className="projects-container">
        {allProjects.map((project, idx) => (
          <ProjectCardMobile
            key={idx}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveProjectLink={project.liveProjectLink}
            screenshots={project.screenshots}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMobile;
