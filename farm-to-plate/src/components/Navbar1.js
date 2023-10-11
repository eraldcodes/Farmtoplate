import "./2124880.css";
import Image from "../img/Farm to plate-1 (1).png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {AiOutlineMenu, AiOutlineMinus } from "react-icons/ai";

const Navbar1 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div className="header1">
      <Link to="/">
        <h1><img src={Image} /></h1>
      </Link>

      <ul className={click ? "nav-menu1 active1" : "nav-menu1"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Join us</Link>
        </li>
      
      </ul>
      <div className="menubutton1" onClick={handleClick}>
        {click ? (
          <AiOutlineMinus size={25} style={{ color: "#fff" }} />
        ) : (
          <AiOutlineMenu size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar1;