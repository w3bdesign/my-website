import React from 'react';
import './App.css';
import VerticalNav from './components/VerticalNav/VerticalNav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import VerticalNav2 from './components/VerticalNav2/VerticalNav2';
import Nav3 from './components/Nav3/Nav3';

function App() {
  return (
    <div className="App">
      <VerticalNav />
      <VerticalNav2 />

      {/* <Nav3 /> */}
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
