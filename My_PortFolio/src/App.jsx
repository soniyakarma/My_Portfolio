import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App ">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;