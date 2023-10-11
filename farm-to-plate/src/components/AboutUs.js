import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../img/pexels-vanessa-loring-5965663.jpg"
import "../components/AboutUs.css";
import Container from 'react-bootstrap/Container';
import logoftp from '../img/Farm to plate-1 (1).png';
import avatar from '../img/avatar.png';
import abdur from '../img/Abdur.jpeg';
import Thani from '../img/Thani.jpeg';



const About = () => {
  return (
    
     <div class="row text-center">
      
        <div className="aboutUs"> 

        <div className="grid-container-aboutUs">
        <div className="grid-item-aboutUs">
        <img className="img" src={logoftp} alt="Bannerimg" />
        <hr></hr>
        </div>
        
        <div className="grid-item-aboutUs">
          <h2>About Us</h2>
        <p>Farm to plate is an organization that enables farmers to display their products and facilities. Instead of being dependent on the complex supply chaion furmers can sell their fresh products to the local customers. While empowring the farmers we ensure that the local people are grtting healthy and fresh produces from  their nearest farms.</p>
        <hr></hr>
        </div>
      

       <div className="grid-item-aboutUs">
        <h2>Our Mission</h2>
        <p>Our mission is to make the world more sustainable while having the farms and local shops connected with the local community. Our aim to have all the farms of London registered with us within July 2023 and cover the whole UK within December 2024. We plan to play a prominent role in the world of fresh produces from year 2025.</p>
        <hr></hr>
       </div>
       
        
       <div className="grid-item-aboutUs">
        <hr></hr>
       </div> 
       </div>

        <h2>Our Team</h2>
       <div className="grid-container">
       <div classname="grid-item">

        <img className="banner-img" src={avatar} alt="Bannerimg" />
       
        <h4 class="font-weight-bold dark-grey-text mt-4">Carlotta</h4>
          <h6 class="font-weight-bold blue-text my-3">Scrum Master : Sprint1A</h6>
          <p class="font-weight-normal dark-grey-text"></p>
       
       </div>
       <div classname="grid-item">

       <div class="testimonial mb-5">
        <img className="banner-img" src={avatar} alt="Bannerimg" />
       
        <h4 class="font-weight-bold dark-grey-text mt-4"> Nabeela</h4>
          <h6 class="font-weight-bold blue-text my-3">Product Owner:Sprint 1A</h6>
          <p class="font-weight-normal dark-grey-text"></p>
       </div>
       </div>

       <div classname="grid-item">

        <img className="banner-img" src={avatar} alt="Bannerimg" />
       
        <h4 class="font-weight-bold dark-grey-text mt-4">Isha</h4>
          <h6 class="font-weight-bold blue-text my-3">Scrum Master : Sprint1B</h6>
          <p class="font-weight-normal dark-grey-text"></p>
       
       </div>

       <div classname="grid-item">
       
    
        <img className="banner-img" src={avatar} alt="Bannerimg" />
      
       
        <h4 class="font-weight-bold dark-grey-text mt-4">Muaz</h4>
          <h6 class="font-weight-bold blue-text my-3">Product Owner: Sprint 1B</h6>
          <p class="font-weight-normal dark-grey-text"></p>
           

  </div>

  <div classname="grid-item"> <div class="testimonial mb-5">
    
        <img className="banner-img" src={abdur} alt="Bannerimg" />
       
        <h4 class="font-weight-bold dark-grey-text mt-4">Abdur Razzak</h4>
          <h6 class="font-weight-bold blue-text my-3">Scrum Master : Sprint 2</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>
            
            </div>
  <div classname="grid-item">
 
    
        <img className="banner-img" src={avatar} alt="Bannerimg" />
       
        <h4 class="font-weight-bold dark-grey-text mt-4">Griffin</h4>
          <h6 class="font-weight-bold blue-text my-3">TProduct Owner: Sprint 2</h6>
          <p class="font-weight-normal dark-grey-text"></p>
           
  </div>
  <div classname="grid-item"> 
    
  <img className="banner-img" src={Thani} alt="Bannerimg" />
       
        <h4 class="font-weight-bold dark-grey-text mt-4">Thani</h4>
          <h6 class="font-weight-bold blue-text my-3">Scrum Master : Sprint 3</h6>
          <p class="font-weight-normal dark-grey-text"></p>
           
            </div>
  <div classname="grid-item"> 
        <img className="banner-img" src={avatar} alt="Bannerimg" />
       
        <h4 class="font-weight-bold dark-grey-text mt-4"> Erald</h4>
          <h6 class="font-weight-bold blue-text my-3">Product Owner: Sprint 3</h6>
          <p class="font-weight-normal dark-grey-text"></p>
           
            </div>

</div>

  </div>
 
  </div>
    
  )
}

export default About
