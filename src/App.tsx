import React from 'react';
import './App.css';
import VerticalNav from './components/VerticalNav/VerticalNav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack';
import Footer from './components/Footer/Footer';
import ContactCard from './components/ContactCard/ContactCard';
import ContactNav from './components/ContactNav/ContactNav';
import Nav3 from './components/Nav3/Nav3';

function App() {
  return (
    <div className="App">
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
