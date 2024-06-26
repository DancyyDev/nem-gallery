import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const NavStation1 = () => {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station1" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/voltage-and-current" relative="path" className="nav-links" onClick={cancelSpeech}>
        Voltage and Current
        </Link>
        <Link to="/human-battery" relative="path" className="nav-links" onClick={cancelSpeech}>
        Do you have the Power?
        </Link>
        <Link to="/orsted" relative="path" className="nav-links" onClick={cancelSpeech}>
        Orsted Experiment
        </Link>
        <Link to="/faraday" relative="path" className="nav-links" onClick={cancelSpeech}>
        Faraday Experiment
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6>Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation1;
