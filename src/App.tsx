import React from 'react';
import './App.css';
import VerticalNav from './components/VerticalNav/VerticalNav';
import ContactNav from './components/ContactNav/ContactNav';
import Home from './components/Home/Home'
import About from './components/About/About'
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects'
import ContactCard from './components/ContactCard/ContactCard';
import Footer from './components/Footer/Footer';
import Nav2 from './components/Nav2/Nav2'
import Nav3 from './components/Nav3/Nav3';

function App() {
  return (
    <div className="App">
      {/* <Nav2 /> */}
      <VerticalNav />
      <ContactNav />

      {/* <Nav3 /> */}
      <Home />
      <About />
      <TechStack />
      <Projects />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default App;
