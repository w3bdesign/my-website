import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import ContactNav from "./components/ContactNav/ContactNav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import About2 from "./components/About2/About2";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import ContactCard from "./components/ContactCard/ContactCard";
import Footer from "./components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import AboutMobile from "./components/AboutMobile/AboutMobile";
import Mobile from "./components/Mobile/Mobile";
import NavNew from "./components/NavNew/NavNew";
import Landing from "./components/Landing/Landing";
import projects from "./projects.json";
import { ProjectType } from "../interface";
import ProjectsMobile from "./components/ProjectsMobile/ProjectsMobile";

// import logo from "./assets/logo3.png";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 479 });
  const isDesktop = useMediaQuery({ minWidth: 480 });

  window.addEventListener("scroll", () => {
    navigationVisible(document.querySelector(".navigation"));
  });

  const navigationVisible = (targetElement: any) => {
    if (window.scrollY > 580) {
      targetElement.classList.add("navigation-visible");
      return;
    }

    if (
      window.scrollY < 600 &&
      targetElement.classList.contains("navigation-visible")
    ) {
      targetElement.classList.remove("navigation-visible");
      return;
    }
  };

  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setAllProjects(projects);
  }, []);

  return (
    <div className="App">
      {isMobile && (
        <>
          <Mobile />
          {/* <AboutMobile /> */}
        </>
      )}
      {isDesktop && (
        <>
          <NavNew allProjects={allProjects} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactCard />} />
            <Route path="/projects" element={<ProjectsMobile allProjects={allProjects} />} />
            <Route path="/technologies" element={<TechStack />} />
          </Routes>
        </>
        // <>
        //   <VerticalNav />
        //   <ContactNav />
        //   <Home />
        //   <About />
        //   <TechStack />
        //   <Projects />
        //   <ContactCard />
        //   <Footer />
        // </>
      )}
    </div>
  );
}

export default App;
