import { useState, useEffect } from "react";
import projects from "../../projects.json";
import { ProjectType } from "../../../interface";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss";

type Props = {
  allProjects: ProjectType[];
};

const Projects: React.FC<Props> = ({ allProjects }) => {
  return (
    <div className="projects">
      <div className="projects-container">
        {allProjects.map((project, idx) => (
          <ProjectCard
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

export default Projects;
