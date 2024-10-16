import React from 'react';
import Header from './Components/Header'
import About from './Components/About';
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import './style.css'
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

