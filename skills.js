// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skill = ({ name, level }) => (
  <div className="skill">
    <h3>{name}</h3>
    <p>{level}</p>
  </div>
);

const Skills = () => {
  const skills = [
    { name: 'Python', level: 'Advanced' },
    { name: 'SQL', level: 'Advanced' },
    { name: 'Scala', level: 'Intermediate' },
    { name: 'R', level: 'Advanced' },
    { name: 'SAS', level: 'Intermediate' },
    { name: 'ReactNative', level: 'Intermediate' }
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default Skills;
