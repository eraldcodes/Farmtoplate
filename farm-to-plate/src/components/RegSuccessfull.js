import React from 'react'
import { Link } from "react-router-dom";
import "./2124880.css";


const RegSuccessfull = () => {
  return (
    <div className="regSuccess">
      <div className="regSuccesscontent">


        <p>Your Email is now verified Succesfully click below to go to Login</p>
       
          <Link to="/Login" className="btn">
            Login
          </Link>
    </div>
    </div>
    
    

  )
}

export default RegSuccessfull