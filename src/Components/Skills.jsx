import React from 'react';

const Skills = () => {
  const skills = [
    {
      skill: "HTML",
      subskills: ["Semantic HTML", "Ordered & UnOrdered Lists", "Forms"],
    },
    {
      skill: "CSS",
      subskills: ["Box model",  "Responsive Design", "Selectors"],
    },
    {
      skill: "JavaScript",
      subskills: [ "DOM Manipulation", "Fetch API"],
    },
    {
      skill: "React",
      subskills: ["Hooks", "Browser routing", "States and Props"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((item, index) => (
          <li key={index} className="skill-item">
            <h3>{item.skill}</h3>
            <ul className="subskills-list">
              {item.subskills.map((subskill, idx) => (
                <li key={idx} className="subskill-item">{subskill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
