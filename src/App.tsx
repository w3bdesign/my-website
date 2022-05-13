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

function App() {
  return (
    <div className="App">
      <VerticalNav />
      <ContactNav />

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
