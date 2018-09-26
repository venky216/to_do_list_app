import React from "react";
import Tilt from "react-tilt";
import chip from "./chip.png"
import './Logo.css'
const Logo = () => {
  return (
    <div className="ma4 auto cont">
    <div>
      <Tilt
        className="Tilt br2 shadow-2 "
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa3"> <img style={{paddingTop: "5px"}} alt="brain" src={chip}></img> </div>
     
      </Tilt>
      </div>
      <span className="main-header">
        TO-DO-LIST-APP
      </span>
      <span className="main-header">
        
      </span>
    </div>
  );
};

export default Logo