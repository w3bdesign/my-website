import React from 'react';
import './App.css';
import VerticalNav from './components/VerticalNav/VerticalNav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <VerticalNav />
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
