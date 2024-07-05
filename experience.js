// src/components/Experience.js
import React from 'react';
import './Experience.css';

const ExperienceItem = ({ title, company, duration, description }) => (
  <div className="experience-item">
    <h3>{title} at {company}</h3>
    <p><em>{duration}</em></p>
    <p>{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: 'Director',
      company: 'Bulls Media, USF',
      duration: 'August 2023 - Present',
      description: 'Oversee Bulls Media\'s budget and technological infrastructure...'
    },
    {
      title: 'Administrator',
      company: 'Data Science Club at USF',
      duration: 'February 2024 - Present',
      description: 'Orchestrate weekly workshops aimed at educating and engaging students in data science...'
    },
    {
      title: 'Business Analyst Intern',
      company: 'A1 Real Estate',
      duration: 'May 2023 - July 2023',
      description: 'Employed adept analytical techniques to extract actionable insights from real estate market data...'
    },
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;
