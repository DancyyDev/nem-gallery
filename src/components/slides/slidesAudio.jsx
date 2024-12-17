import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import audio1 from "../../assets/sound/01C.mp3"
import audio2 from "../../assets/sound/02C.mp3"
import audio3 from "../../assets/sound/03C.mp3"

import audioImg1 from "../../assets/img/audioPic1.jpg"
import audioImg2 from "../../assets/img/audioPic2.jfif"
import audioImg3 from "../../assets/img/audioPic3.jpg"
import iconPlay from "../../assets/img/icon_play.svg"
import iconStop from "../../assets/img/icon_stop.svg"
import iconPause from "../../assets/img/icon_pause.svg"

import "./slides.css";

const SlidesAudio = () => {
    const [tune, setTune] = useState(false)
    const soundOne = document.getElementById("sound1")
    const soundTwo = document.getElementById("sound2")
    const soundThree = document.getElementById("sound3")

    const playSoundOne = () => {      
    const soundOne = document.getElementById("sound1")
        if(tune === false) {
            console.log()     
            soundOne.play()
            setTune(true)
        } else {
            soundOne.pause()
            setTune(false)
        }
        console.log("sound playing")
    }

    const playSoundTwo = () => {
        if(tune === false) {
            console.log()    
            soundTwo.play()
            setTune(true)
        } else {
            soundTwo.pause()
            setTune(false)
        }
        console.log("sound playing")
    }
    const playSoundThree = () => {
        if(tune === false) { 
            soundThree.play() 
            setTune(true)
        } else {
            soundThree.pause()
            setTune(false)
        }
        console.log("sound playing")
    }

    const stopSound = () => {
        console.log("stopsound, it hit!")
        soundOne.pause()
        soundOne.currentTime = 0
        soundTwo.pause()
        soundTwo.currentTime = 0
        soundThree.pause()
        soundThree.currentTime = 0
        setTune(false)
    }
    return(
        <div>
            <Swiper
                pagination ={{
                    type: "progressbar"
                }}
                navigation = {true}
                modules = {[Pagination, Navigation]}
                className = "mySwiper"
                onSlideChange={stopSound}
                >
                    

                    <SwiperSlide>
                        <div className="audioSlides">
                            <div className="placeholder">
                            <img src={audioImg1}></img>
                            </div>
                            <div className="audioRight">
                                <h3>Bunker Hill</h3>
                                <span><h5><i>Performed by</i> <b>Harlan and Stanley</b>, Ca. 1905</h5></span>
                                
                                <p>Recorded on Edison black wax cylinder #8966</p>
                                <audio id="sound1" src={audio1}></audio>
                                <div className ="audioPlayer">
                                    <button><img src={tune === false ? iconPlay : iconPause} onClick={playSoundOne}/></button>
                                    <button onClick={stopSound}><img src={iconStop}/></button> 
                                </div>
                                
                            </div>
                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="audioSlides">
                            <div className="placeholder">
                            <img src={audioImg2}></img>
                            </div>
                            <div className="audioRight">
                                <h3>Over There</h3>
                                <span><h5><i>Performed by</i> <b>Enrico Caruso</b>, 1918</h5></span>
                                <p>Recorded on Victor Talking Machine disk.</p>
                                <audio id="sound2" src={audio2}></audio>
                                <div className ="audioPlayer">
                                    <button onClick={playSoundTwo}><img src={iconPlay}/></button>
                                    <button onClick={stopSound}><img src={iconStop}/></button> 
                                </div>
                            </div>
                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="audioSlides">
                            <div className="audioLeft">
                                <img style={{left: "-20"}}src={audioImg3}></img>
                            </div>
                            <div className="audioRight">
                                <h3>Johnny B. Goode</h3>
                                <span><h5><i>Performed by</i> <b>The Grateful Dead</b>, June 10, 1973</h5></span>
                                <p>Recorded on Sony TC 2850SD portable cassette recorder on Memorex cassettes.</p>
                                <audio id="sound3" src={audio3}></audio>
                                <div className ="audioPlayer">
                                    <button onClick={playSoundThree}><img src={iconPlay}/></button>
                                    <button onClick={stopSound}><img src={iconStop}/></button> 
                                </div>
                            </div>
                            
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SlidesAudio