import "../components/2124880.css";
import React, { useState, useRef } from "react";
import "react-router-dom";


import {
  FaHome,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import emailjs from '@emailjs/browser';



  

const Contactsection = () => {
const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gty5g6p', 'template_yph619s', form.current, 'noRr9wL0kugxgW7n-')
        .then(
          (result) => {
            console.log(result.text);
            alert("message sent");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            console.log("message not sent")
          }
        );
      };
    return (
    <div className="contact">
    <div className="contact-container">
      <div className="left1">
        <div className="location1">
          <FaHome size={30} style={{ color: "#000", marginRight: "1rem" }} /><p>Brunel University, Uxbridge </p>
        </div>
        <div className="phone1">
          
            <FaPhone size={30} style={{ color: "#000", marginRight: "1rem" }}/><p>020000000000</p>
        </div>
        <div className="email1">
            <FaMailBulk size={30} style={{ color: "#000", marginRight: "1rem" }}/><p> farmtoplateinfo@gmail.com </p>
        </div>
      </div>

      <div className="right1">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
         <button type="submit">Send</button>
         </form>
      </div>
    </div>
  </div>
  )

}

export default Contactsection