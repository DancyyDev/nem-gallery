import React, { useState, useContext } from "react";
import "../speech/speech.css";
import iconPlay from "../../assets/img/icon_play.svg"
import iconStop from "../../assets/img/icon_stop.svg"
import iconPause from "../../assets/img/icon_pause.svg"
// import "../../assets/img/icon_play.svg"
import { Context, ContextLangSpeech } from "../../assets/accessibilityContext";

function Speech({ text, title }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [speechBtn, setSpeechBtn] = useState("hidden");

  const pauseIcon = <i className="fa-regular fa-circle-pause fa-4x"></i>
  const playIcon = <i className="fa-regular fa-circle-play fa-4x"></i>
  const [audioIcon, setAudioIcon] = useState(playIcon);
  const [speechText, setSpeechText] = useState("Play")

  const [lang, setLang] = useContext(Context);
  const [langSpeech, setLangSpeech] = useContext(ContextLangSpeech);

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);

  utter.addEventListener("start", (event) => {
    console.log(`We have started uttering this speech: ${event.utterance.text}`);
    console.log(event)
    utter.onboundary = (e) => {
      console.log("name",e.name)
    }
  });
  
  utter.addEventListener("end", (event) => {
    synth.cancel()
    setSpeechText("Play")
    console.log(
      `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
    );
  })

  utter.lang = langSpeech
  utter.pitch = 1;
  utter.rate = 1.2;

  const callback = () => {
    if (!toggle) {
      setSpeechBtn("present");
      setToggle(true);
    } else {
      setSpeechBtn("hidden");
      setToggle(false);
    }
  };

  const speakControl = () => {
    
    const speechDelay = () => {
      setTimeout(() => {
        synth.speak(utter);
      }, "1000");
    }
    const speechReset = () => {
      setTimeout(() => {
        synth.pause();
        synth.resume();
      console.log("it hit!")
      }, "10000");
    }

    console.log("timeout", speechDelay)
    //Starts speech
    if (speechText === "Play") {
      synth.cancel()
      setSpeechText("Pause")
      setAudioIcon(pauseIcon)
      speakStart(speechDelay,speechReset);
      console.log("Speech starting");
      //pauses speech
    }
    if ( speechText === "Pause") {
      setSpeechText("Resume")
      speakPause(speechReset);
      // setAudioIcon(playIcon);
      console.log("Speech paused");
    }

      //resumes speech
    if (speechText === "Resume") {
      setSpeechText("Pause")
      speakResume();
      // setAudioIcon(pauseIcon);
      console.log("Speech resuming");
    }

    console.log(pause);
  };
  
  const speakStart = (x,y) => {
    synth.cancel();

    x()
    y()
    synth.speak(utter);
    console.log("uttered")
    synth.cancel();
    console.log("canceled")
    synth.speak(utter);
    console.log("uttered again")
  };

  const speakPause = (y) => {
      synth.pause();
  };

  const speakResume = () => {
    synth.resume();
  };

  const speakStop = () => {
    setStop(true);
    setPause(false);
    setSpeechText("Play")
    setAudioIcon(playIcon)
    synth.cancel();
    console.log("Speech stopped");
  };

  utter.onerror = (event) => {
    console.log(
      `An error has occurred with the speech synthesis: ${event.error}`,
    );
  };

  return (
    <div>
      <div className="speechPlayer">
        <div className="speechToggle">
          <i className="fa-solid fa-font"></i>
          <label>
            <input type="checkbox" onClick={callback} />
            <span />
          </label>
          <i className="fa-solid fa-volume-high"></i>
        </div>
        <div className={speechBtn}>
          {/* <button onClick={speakControl} className="speech">
            {pause == false && stop == true ? (
              <i className={playIcon}></i>
            ) : pause == false && stop == false ? (
              <i className={pauseIcon}></i>
            ) : pause == true ? (
              <i className={pauseIcon}></i>
            ) : (<i className={pauseIcon}></i>)}
          </button> */}
          {/* <button onClick={speakControl} className="speech">
            {speechText}
            {audioIcon}
          </button> */}

          <button onClick={speakControl} className="speech">
            <img src={ speechText == "Play" ? iconPlay : speechText == "Resume" ? iconPlay : iconPause} className="iconImg"></img>
          </button>
          
          <button onClick={speakStop} className="speech">
            <img src={iconStop} className="iconImg"></img>
          </button>

          {/* <button onClick={speakStart} className="speech">
            <i className={playIcon}></i>
          </button> */}

          {/* <button onClick={speakPause} className="speech">
            <i className={pauseIcon}></i>
          </button>

          <button onClick={speakStop} className="speech">
            <i className="fa-regular fa-circle-stop fa-4x"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Speech;
