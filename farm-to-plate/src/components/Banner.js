import "./2124880.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../img/pexels-vanessa-loring-5965663.jpg"



const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerwallpaper">
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
      <div className="bannercontent">
        <p>Find whats available near you</p>
        <div>
          <Link to="/shop" className="btn">
            Find Now
          </Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Banner