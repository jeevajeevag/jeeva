import React from 'react';
import NavBar from './components/Navbar'
import About from './components/About'; 
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
