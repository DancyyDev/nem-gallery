import React from "react";
import Slides from "../components/slides/slides";
import MenuStation7 from "../components/menu/menuStation7";
import { artifact } from "../assets/database/artifact";
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

function Polarization() {
  const data = artifact.filter((x) => x.title === "Polarization Experiment");

  return (
    <>
      <div className="btnNav">
        <MenuStation7 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Polarization Experiment</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} />
    </>
  );
}

export default Polarization;
