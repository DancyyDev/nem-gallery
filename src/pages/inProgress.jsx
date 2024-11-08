import React, { useState, useContext } from "react";
import MenuStation1 from "../components/menu/menuStation1.jsx";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { Context, ContextSpeechPlayer } from "../assets/accessibilityContext.js";

export default function InProgress() {
  const [toggle, setToggle] = useState(false);

  const callback = () => {
    if (!toggle) {
      setspeechPlayer("present");
      setToggle(true);
    } else {
      setspeechPlayer("hiddenPlayer");
      setToggle(false);
    }
  };

  return (
    <div>
      <div className="btnNav">
        <MenuStation1 />
      </div>
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="inProgress">Currently In Progress</h1>
        </div>
      </div>
    </div>
  );
}