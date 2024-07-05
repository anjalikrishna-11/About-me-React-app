// src/App.js
import React from 'react';
import './App.css';
import PersonalInfo from './components/personalinfo';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
