import React, {useContext} from "react";
import Slides from "../components/slides/slides";
import { ContextImage } from "../assets/accessibilityContext.js";
import MenuStation2 from "../components/menu/menuStation2";
import { artifact } from "../assets/database/artifact";
import Accessibility from "../components/accessibility/accessibility";
import Loop from "../components/loop";

import image1 from "../assets/img/jumpingwire1.jpg";
import image2 from "../assets/img/jumpingwire2.jpg";

function JumpingWires() {
  const data = artifact.filter((x) => x.title === "Jumping Wires");
  
  const [display, setDisplay] = useContext(ContextImage)
    
  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : null
  
  const hideMe = () => {
    setDisplay("hideImage")
  }

  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
        <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne" />
      </div>
      <div className="btnNav">
        <MenuStation2 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Jumping Wires</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} artifactImg1={image1} artifactImg2={image2} />
    </div>
  );
}

export default JumpingWires;
