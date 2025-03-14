import artifactImg from "../assets/img/marconi.svg";
import React, {useContext} from "react";
import { Context,ContextImage } from "../assets/accessibilityContext.js";
import SlidesMarconi from "../components/slides/slidesMarconi.jsx";
import MenuStation3 from "../components/menu/menuStation3.jsx";
import { artifact } from "../assets/database/artifact";
import { artifactSpanish } from '../assets/database/artifacts-spanish.js'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

import image1 from "../assets/img/marconi2.jpg"
import image2 from "../assets/img/marconi3.jpg"
import image3 from "../assets/img/marconi02.png"

const Marconi = () => {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter(x => x.title === "The Marconi Magnetic Detector").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "El Detector Magnético Marconi").pop()
          
  const dataArtifact = lang === "default" ? data: lang === "english" ? data : dataSpanish
  const dataTitle = lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title
            
  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : display.includes("showImageThree") ? display : display.includes("showImageFour") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : display.includes("showImageThree") ? image3 : display.includes("showImageFour") ? image4 : null
            
  const hideMe = () => {
    setDisplay("hideImage")
  }
  

  return (
    <>
      <div className={displayingImage} onClick={hideMe}>
        <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne" />
      </div>
      <div className="btnNav">
        <MenuStation3 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{dataTitle}</h1>
        </div>
      </div>
      <Loop />
      <SlidesMarconi artifact={dataArtifact} artifactImg1={image1} artifactImg2={image2} artifactImg3={image3}/>
    </>
  );
};

export default Marconi;
