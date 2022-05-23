import React from "react";
import "./NavNew.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import { ProjectType } from "../../../interface";

type Props = {
  allProjects: ProjectType[];
};

const NavNew: React.FC<Props> = ({ allProjects }) => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };
  const goToLanding = () => {
    navigate("/");
  };
  const goToContact = () => {
    navigate("/contact");
  };
  const goToProjects = () => {
    navigate("/projects");
  };
  const goToStack = () => {
    navigate("/technologies");
  };

  return (
    <div className="NavNew">
      <div className="logo" onClick={goToLanding}>
        <img src={logo} />
        <h2>Joan Gerard</h2>
      </div>
      <div className="bottomnav">
        <div className="projects-name">
          {allProjects.map((project, idx) => (
            <p key={idx}>{project.name}</p>
          ))}
        </div>
        <div className="nav-links">
          <p onClick={goToAbout}>About</p>
          <p onClick={goToStack}>Stack</p>
          <p onClick={goToProjects}>Projects</p>
          <p onClick={goToContact}>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default NavNew;
