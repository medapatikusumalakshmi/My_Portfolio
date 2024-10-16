import React from 'react';
import me from '../assessts/IMG20240611193236~2 (1).jpg'

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={me} alt="My Photo" className="about-photo" />
        <p>Hello! I'm Kusuma ,<br />I'm a passionate web developer with skills in HTML, CSS, JavaScript, and React.</p>
      </div>
    </section>
  );
}

export default About;
