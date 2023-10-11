import "./2124880.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import introImg from "../img/pexels-vanessa-loring-5965664.jpg";



const Intro = () => {
  return (
    <div className="intro">
      <div className="introwallpaper">
        <img className="intro-img" src={introImg} alt="Introimg" />
      <div className="introcontent">
        <p>  FARM TO PLATE</p>
        <h1>FIND WHAT'S IN SEASON NEAR YOU</h1>
        <div>
        <Link to="/signup" className="btn">
            Signup <span>&#8594;</span>
          </Link>  
          <Link to="/shop" className="btn">
            Find Now
          </Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Intro