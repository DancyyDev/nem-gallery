import React, {useContext} from 'react'
import Slides from '../components/slides/slides'
import { ContextImage } from "../assets/accessibilityContext.js";
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'
import Loop from '../components/loop'
import Accessibility from '../components/accessibility/accessibility'

import image1 from "../assets/img/faraday1.jpg"
import image2 from "../assets/img/faraday2.jpg"


function Faraday() {
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter(x => x.title === "Faraday's Experiment: Electricity and Magnetism")
  
  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : null

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
          <h1 className="artifactTitle">Faraday's Experiment: Electricity and Magnetism</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} artifactImg1={image1} artifactImg2={image2}/>
    </div>
  )
}

export default Faraday