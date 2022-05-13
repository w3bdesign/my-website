import React from "react";
import "./App.css";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import ContactNav from "./components/ContactNav/ContactNav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import About2 from "./components/About2/About2";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import ContactCard from "./components/ContactCard/ContactCard";
import Footer from "./components/Footer/Footer";
import logo from "./assets/logo3.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />

      <VerticalNav />
      <ContactNav />

      <Home />
      <About />
      {/* <About2 /> */}
      <TechStack />
      <Projects />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default App;
