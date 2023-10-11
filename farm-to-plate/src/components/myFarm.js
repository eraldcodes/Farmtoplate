import React from 'react'
import slider from "../img/Farm to plate-1 (1).png";
import "../components/2020270/myfarm.css";
import { Link } from "react-router-dom";

function myFarm() {
    return (
  <div className="bg-primary">
  <div className="container-column">
          <h2 className="text-center">List of Farms</h2>
          <div className="farms">
          <div className="farm">
              <img src={slider} alt="" />
              <div className="details">
                  <h2 className='fName'>Farm name</h2>
                  <p className='fLoc'>Location</p>
              </div>
              <button class="Editfbtn" role="button"><Link to="/editfarm">EditFarm</Link></button>
                  <h2>Farm name</h2>
                  <p>Location</p>
              </div>
  
          </div>
      </div>
      </div>
  
      
    )
  }
  
  export default myFarm