import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";
import projects from "../../projects.json";
import { ProjectType } from "../../../interface";

const Projects = () => {
  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setAllProjects(projects);
  }, []);

  // console.log("PROJECTS", projects);
  // console.log("allProjects", allProjects);

  return (
    <div id="Projects" className="Projects">
      <h1>Projects</h1>
      <div className="projectCards">
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
