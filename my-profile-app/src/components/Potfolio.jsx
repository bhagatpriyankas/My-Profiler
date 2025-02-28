import React from 'react';

import About from './about';
import HeaderPage from './HeaderPage';
import Home from './Home';
import Projects from './Projects';

function Portfolio() {
  return (
    <div>
      {/* Sticky Header */}
      <HeaderPage />

      {/* Page Sections */}
      <div id="home" className="section">
        <Home/>
      </div>

      <div id="about" className="section">
        <About/>
      </div>

      <div id="projects" className="section">
        <Projects />
      </div>

      <div id="contact" className="section">
        {/* <Contact/> */}
      </div>
    </div>
  );
}

export default Portfolio;
