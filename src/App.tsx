import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import projects from "./projects.json";
import { ProjectType } from "../interface";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
// import { useMediaQuery } from "react-responsive";

function App() {
  // const isMobile = useMediaQuery({ maxWidth: 479 });
  // const isDesktop = useMediaQuery({ minWidth: 480 });

  // window.addEventListener("scroll", () => {
  //   navigationVisible(document.querySelector(".navigation"));
  // });

  // const navigationVisible = (targetElement: any) => {
  //   if (window.scrollY > 580) {
  //     targetElement.classList.add("navigation-visible");
  //     return;
  //   }

  //   if (
  //     window.scrollY < 600 &&
  //     targetElement.classList.contains("navigation-visible")
  //   ) {
  //     targetElement.classList.remove("navigation-visible");
  //     return;
  //   }
  // };

  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setAllProjects(projects);
  }, []);

  return (
    <div className="App">
      <>
        <Header allProjects={allProjects} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={<Projects allProjects={allProjects} />}
          />
          <Route path="/technologies" element={<TechStack />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
