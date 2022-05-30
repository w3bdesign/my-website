import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { ProjectType } from "../../../interface";
import ContactNav from "../ContactNav/ContactNav";
import { useMediaQuery } from "react-responsive";

type Props = {
  allProjects: ProjectType[];
};

const Header: React.FC<Props> = ({ allProjects }) => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };
  const goToLanding = () => {
    navigate("/");
  };
  // const goToContact = () => {
  //   navigate("/contact");
  // };
  const goToProjects = () => {
    navigate("/projects");
  };
  const goToStack = () => {
    navigate("/technologies");
  };

  const isTablet = useMediaQuery({ maxWidth: 700 });

  return (
    <div className="NavNew">
      <div className="logo" onClick={goToLanding}>
        <h2>Joan Gerard</h2>
      </div>
      <div className="nav-links">
        <p onClick={goToAbout}>About</p>
        <p onClick={goToStack}>Stack</p>
        <p onClick={goToProjects}>Projects</p>
        {/* <p className="contactLink" onClick={goToContact}>Contact</p> */}
      </div>
      {isTablet ? null : <ContactNav />}
      {/* </div> */}
    </div>
  );
};

export default Header;
