import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Adding Resume download button */}
          <li><a href="/resume(5).pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

