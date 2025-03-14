import React, {useContext} from 'react'
import Accessibility from "../components/accessibility/accessibility.jsx";
import { Context, ContextImage } from "../assets/accessibilityContext.js";
import { artifact } from '../assets/database/artifact'
import { artifactSpanish } from "../assets/database/artifacts-spanish.js"
import MenuStation1 from '../components/menu/menuStation1'
import Slides from '../components/slides/slides'
import Loop from '../components/loop.jsx';

import image1 from "../assets/img/oersted1.jpg"
import image2 from "../assets/img/oersted2.jpg"
import image3 from "../assets/img/oersted3.png"

function Oersted() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter(x => x.title === "Oersted's Experiment").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "El experimento de Oersted").pop()


  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image2 : display.includes("showImageTwo") ? image3 : null

  const hideMe = () => {
    setDisplay("hideImage")
  }
  
  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
      <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne"/>
      </div>

      <div className="btnNav">
        <MenuStation1 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={lang === "default" ? data : lang === "english" ? data : dataSpanish} artifactImg1={image2} artifactImg2={image3}/>
    </div>
  )
}

export default Oersted