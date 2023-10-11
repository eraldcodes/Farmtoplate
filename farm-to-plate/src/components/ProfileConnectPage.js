import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./2124880.css";

import  Farms from "../components/Farmdetails";
import "../components/ProfileConnectPage.css";
import Profile1 from "../routes/Profile1";
import Container from 'react-bootstrap/Container';

import FarmStory from'../components/FarmStory';


const ProfileConnect = () => {
  return (
<div className="PC">
<Container className="ConnectPage">
    <><table className="table table-striped table-bordered">
     

          <tbody>


              <td> <div className="FarmProfile"> <Profile1 /></div><br></br><br></br></td>
              <td>  <div className="FarmProfile"><Farms /><hr/>
              Have more farms?<br/>
              <Link to="/farmreg" className="btnconnect">
                      Register Your Farm
                  </Link>
<FarmStory/>
              </div>
             </td>
             

          </tbody>
      </table></>
      </Container>
      </div>
  )
}
export default ProfileConnect
