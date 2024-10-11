import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./App.css";
import HomeStation from "./pages/homeStation";

import Station1 from "./pages/station1";
import VoltAndCurr from "./pages/voltAndCurr";
import HumanBattery from "./pages/humanBatt";
import Orsted from "./pages/orsted";
import Faraday from "./pages/faraday";

import Station2 from "./pages/station2";
import JumpingWires from "./pages/jumpingWires";
import JacobsLadder from "./pages/jacobsLadder";
import StaticElectricity from "./pages/staticElectricity";
import Turbine from "./pages/turbine";

import Station3 from "./pages/station3";
import Theremin from "./pages/theremin";
import VisibleElectronicWaves from "./pages/visibleElectronicWaves";
import Polarization from "./pages/polarization";

import Station4 from "./pages/station4";
import MicrowaveTurntable from "./pages/microwaveTurntable";

import Station5 from "./pages/station5";

import Station6 from "./pages/station6";
import Audio from "./pages/audio";
import Marconi from "./pages/marconi";
import FirstBroadcast from "./pages/firstBroadcast";
import EvolutionSound from "./pages/evolutionSound";

import Station7 from "./pages/station7";
import Telegraph from "./pages/telegraph";

import Station8 from "./pages/station8";
import VacuumTube from "./pages/vacuumTube";

import Station11 from "./pages/station11";
import Station12 from "./pages/station12";
import Station10 from "./pages/station10";
import Station9 from "./pages/station9";

import {
  Context,
  ContextFontSize,
  ContextFontFamily,
  ContextLangSpeech,
} from "./assets/accessibilityContext";

function App() {
  const [fontS, setFontS] = useState("default");
  const [lang, setLang] = useState("english");
  const [fontF, setFontF] = useState("default");
  const [langSpeech, setLangSpeech] = useState("en-GB");

  return (
    <ContextFontSize.Provider value={[fontS, setFontS]}>
      <Context.Provider value={[lang, setLang]}>
        <ContextFontFamily.Provider value={[fontF, setFontF]}>
          <ContextLangSpeech.Provider value={[langSpeech, setLangSpeech]}>
            <Router>
              <Routes>
                {/* Station 1 */}
                <Route path="/station1" element={<Station1 />} />
                <Route path="/voltage-and-current" element={<VoltAndCurr />} />
                <Route path="/human-battery" element={<HumanBattery />} />
                <Route path="/orsted" element={<Orsted />} />
                <Route path="/faraday" element={<Faraday />} />

                {/* Station 2 */}
                <Route path="/station2" element={<Station2 />} />
                <Route path="/jumping-wires" element={<JumpingWires />} />
                <Route path="/jacobs-ladder" element={<JacobsLadder />} />
                <Route
                  path="/static-electricity"
                  element={<StaticElectricity />}
                />
                <Route path="/manual-turbine" element={<Turbine />} />

                {/* Station 3 */}
                <Route path="/station3" element={<Station3 />} />
                <Route path="/theremin" element={<Theremin />} />
                <Route
                  path="/visible-electromagnetic-waves"
                  element={<VisibleElectronicWaves />}
                />
                <Route path="/polarization" element={<Polarization />} />

                {/* Station 4 */}
                <Route path="/station4" element={<Station4 />} />
                <Route
                  path="/microwave-turntable"
                  element={<MicrowaveTurntable />}
                />

                {/* Station 5 */}
                <Route path="/station5" element={<Station5 />} />

                {/* Station 6 */}
                <Route path="/station6" element={<Station6 />} />
                <Route path="/marconi" element={<Marconi />} />
                <Route path="/audio-translator" element={<Audio />} />
                <Route path="/first-broadcast" element={<FirstBroadcast />} />
                <Route
                  path="/evolution-of-sound"
                  element={<EvolutionSound />}
                />

                {/* Station 7 */}
                <Route path="/station7" element={<Station7 />} />
                <Route path="/telegraph" element={<Telegraph />} />

                {/* Station 8 */}
                <Route path="/station8" element={<Station8 />} />
                <Route path="/vacuum-tubes" element={<VacuumTube />} />

                {/* Station 9 */}
                <Route path="/station9" element={<Station9 />} />

                {/* Station 10 */}
                <Route path="/station10" element={<Station10 />} />

                {/* Station 11*/}
                <Route path="/station11" element={<Station11 />} />

                {/* Station 12*/}
                <Route path="/station12" element={<Station12 />} />

                <Route exact path="/" element={<HomeStation />} />
                <Route path="/audio" element={<Audio />} />
                <Route path="/marconi" element={<Marconi />} />
                <Route path="/telegraph" element={<Telegraph />} />
              </Routes>
            </Router>
          </ContextLangSpeech.Provider>
        </ContextFontFamily.Provider>
      </Context.Provider>
    </ContextFontSize.Provider>
  );
}

export default App;
