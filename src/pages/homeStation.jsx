import React from "react";
import { Link } from "react-router-dom";
import FontSize from "../components/fonts/fontSize";


function HomeStation() {
  return (
    <>
      <div>
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <ul>
        {/* <li><Link to="/admin" relative="path" className="homeImg">Admin</Link></li> */}
        <li><Link to="/station1" relative="path" className="homeImg">Station 1</Link></li>
        <li><Link to="/station2" relative="path" className="homeImg">Station 2</Link></li>
        <li><Link to="/station3" relative="path" className="homeImg">Station 3</Link></li>
        <li><Link to="/station4" relative="path" className="homeImg">Station 4</Link></li>
        <li><Link to="/station5" relative="path" className="homeImg">Station 5</Link></li>
        {/* <li><Link to="/theremin" relative="path" className="homeImg">Station 6</Link></li> */}
        <li><Link to="/station7" relative="path" className="homeImg">Station 7</Link></li>
        {/* <li><Link to="/station8" relative="path" className="homeImg">Station 8</Link></li> */}
        <li><Link to="/hamradio" relative="path" className="homeImg">Station 9</Link></li>
        {/* <li><Link to="/station10" relative="path" className="homeImg">Station 10</Link></li>
        <li><Link to="/station11" relative="path" className="homeImg">Station 11</Link></li>
        <li><Link to="/station12" relative="path" className="homeImg">Station 12</Link></li> */}
        {/* <li><Link to="/in-progress" relative="path" className="homeImg">In Progress</Link></li> */}
      </ul>
    </>
  );
}

export default HomeStation;
