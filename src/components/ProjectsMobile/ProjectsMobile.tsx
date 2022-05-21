import { useState, useEffect } from "react";
import projects from "../../projects.json";
import { ProjectType } from "../../../interface";
import ProjectCardMobile from "./ProjectCardMobile/ProjectCardMobile";
import "./ProjectsMobile.scss";

const ProjectsMobile = () => {
  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setAllProjects(projects);
  }, []);

  return (
    <div className="projectCardsMobile">
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
  );
};

export default ProjectsMobile;
