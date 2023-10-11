import "./2124880.css";
import React, { useState } from "react";
import "react-router-dom";
import CoverImg from "../img/pexels-eberhard-grossgasteiger-2088170.jpg"

const Blankpage = () => {
    return (
      <div className="blank">
        <div className="wallpaper">
          <img className="blank-img" src={CoverImg} alt="Coverimg" />
        </div>
      </div>
      
    )
  }
  
  export default Blankpage;