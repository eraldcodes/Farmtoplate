import "./2124880.css";
import React, { useState } from "react";
import "react-router-dom";


import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Brunel University, Uxbridge</p>
            

        </div>
        <div className="phone">
          <p>
            <FaPhone
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            020000000000
          </p>
        </div>
        
        <div className="email">
          <p>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            farmtoplateinfo@gmail.com
          </p>
        </div>
      </div>

      <div className="right">
        <h4>About</h4>
        <p>
          Farm to plate is a platform service that promotes buisness's
          that sells local and seasonal produce based on UK.
        </p>
        <div className="socialmedia">
          <FaFacebook
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
          <FaTwitter
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
          <FaInstagram
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer