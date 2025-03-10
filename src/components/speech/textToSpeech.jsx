import React, { useState, useContext } from "react";
import "../speech/speech.css";
import iconPlay from "../../assets/img/icon_play.svg"
import iconStop from "../../assets/img/icon_stop.svg"
import iconPause from "../../assets/img/icon_pause.svg"
import { Context, ContextLangSpeech, ContextSpeechPlayer } from "../../assets/accessibilityContext";

function textToSpeech({ text, audio }) {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [speechBtn, setSpeechBtn] = useState("hidden");
  const [speechText, setSpeechText] = useState("Play")

  const [langSpeech, setLangSpeech] = useContext(ContextLangSpeech);
  const [speechPlayer, setspeechPlayer] = useContext(ContextSpeechPlayer);

  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  console.log(synth)

  utter.lang = langSpeech
  utter.pitch = 1.1;
  utter.rate = 1.5;
  utter.volume = 1;

//   const speakControl = () => {

//     //Starts speech
//     if (speechText === "Play") {
//       setSpeechText("Pause")
//       speakStart();
//       console.log("Speech starting");
//       //pauses speech
//     }
//     if ( speechText === "Pause") {
//       setSpeechText("Resume")
//       speakPause();
//       console.log("Speech paused");
//     }

//       //resumes speech
//     if (speechText === "Resume") {
//       setSpeechText("Pause")
//       speakResume();
//       console.log("Speech resuming");
//     }
//   };
  
  const speakStart = () => {
    synth.cancel();
    synth.speak(utter);
    console.log("uttered", utter)
    console.log(synth)
  };

  const speakPause = () => {
      synth.pause();
  };

  const speakResume = () => {
    synth.resume();
  };

  const speakStop = () => {
    setStop(true);
    setPause(false);
    setSpeechText("Play")
    synth.cancel();
    console.log("Speech stopped");
  };

  return (
    <div>
      <div className="speechPlayer">

        <div className={speechPlayer}>

          <button onClick={speakStart} className="speech">
            <img src={iconPlay}></img>
          </button>
          
          <button onClick={speakStop} className="speech">
            <img src={iconStop} className="iconImg"></img>
          </button>

        </div>
      </div>
    </div>
  );
}

export default textToSpeech;
