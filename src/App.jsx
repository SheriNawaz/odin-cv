import { useState } from "react";

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Eductation"
import Experience from "./components/Experience"
import CV from "./components/CV";
import './styles.css'
function App() {

  return (
    <div className="container">
     <header className="header">
        <h1 className="app-title">CV Builder</h1>
        <p className="app-subtitle">Create your professional resume</p>
      </header>
      <div className="content">
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;
