import React from 'react'
import { artifact } from '../assets/database/artifact'
import Slides from '../components/slides/slides'
import Menu from '../components/menu/menu'

function MicrowaveTurntable() {
  const data = artifact.filter(x => x.title === "Why do Microwaves Have Turntables?")
  return (
    <div>
      <Menu />
      <h1 className="artifactTitle">Why do Microwaves Have Turntables?</h1>
      <Slides artifact={data[0]} />
    </div>
  )
}

export default MicrowaveTurntable