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
      <p>I am a Management Graduate with over 15 years of professional work experience, including 9 years in Electronic Media as a Senior News Presenter. Passionate about traveling and interacting with people.</p>
    </div>
  );
};

export default PersonalInfo;
