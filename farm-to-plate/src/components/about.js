import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../img/pexels-vanessa-loring-5965663.jpg"
import "../components/aboutU.css";
import Container from 'react-bootstrap/Container';





const About = () => {
  return (
    <Container class="bg-light mt-5" id="tourist">    
    <div class="about-container">
    
     <div class="row text-center">
       <div class="col-sm-12 col-md-12 mb-4">
           <h3 class="text-center mt-4 text-secondary">About Us</h3>
        </div>

        <div className="aboutUs"> 
        <h2>Our Team</h2>
<div className="grid-container">
  <div classname="grid-item"> 
  <div class="testimonial mb-5">
           <div class="avatar mx-auto">
    
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
        </div>
       
        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Scrum Master: 1A</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>
            </div>
  <div classname="grid-item">

  <div class="testimonial mb-5">
           <div class="avatar mx-auto">
    
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
        </div>
       
        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Product Owner:Sprint 1A</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>
  </div>

  <div classname="grid-item">

  <div class="testimonial mb-5">
           <div class="avatar mx-auto">
    
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
        </div>
       
        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Scrum Master : Sprint1B</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>

  </div>

  <div classname="grid-item">
  <div class="testimonial mb-5">
           <div class="avatar mx-auto">
    
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
        </div>
       
        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Product Owner: Sprint 1B</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>


  </div>

  <div classname="grid-item"> <div class="testimonial mb-5">
           <div class="avatar mx-auto">
    
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
        </div>
       
        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Scrum Master : Sprint 2</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>
            
            </div>
  <div classname="grid-item">
  <div class="testimonial mb-5">
           <div class="avatar mx-auto">
    
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
        </div>
       
        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">TProduct Owner: Sprint 2</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>
  </div>
  <div classname="grid-item"> <div class="testimonial mb-5">
           <div class="avatar mx-auto">
    
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
        </div>
       
        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Scrum Master : Sprint 3</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>
            </div>
  <div classname="grid-item"> <div class="testimonial mb-5">
           <div class="avatar mx-auto">
    
        <img className="banner-img" src={bannerImg} alt="Bannerimg" />
        </div>
       
        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Product Owner: Sprint 3</h6>
          <p class="font-weight-normal dark-grey-text"></p>
            </div>
            </div>


</div>


      

 
  </div>
 
  </div>
  </div>
  </Container>
  
  


    
  )
}

export default About