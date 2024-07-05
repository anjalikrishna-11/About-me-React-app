personalInfo.js
// src/components/personalinfo.js
import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h1>Anjali Krishna</h1>
      <p>Tampa, FL 33620</p>
      <p>Email: <a href="mailto:akna@usf.edu">akna@usf.edu</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/anjali-krishna11">anjali-krishna11</a></p>
      <p>I am currently pursuing a Bachelor of Science in Business Analytics and Information Systems as well as Econometrics at the University of South Florida, expected to graduate in May 2026. I am passionate about leveraging data-driven initiatives and fostering innovation, with interests spanning media and communication, product management, and entrepreneurship.</p>
    </div>
  );
};

export default PersonalInfo;
