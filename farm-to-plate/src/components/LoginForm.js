import "./LoginStyles.css";
import React, { useState } from "react";
import "react-router-dom";
import CoverImg from "../img/pexels-eberhard-grossgasteiger-2088170.jpg"
import axios from "axios";
import Navbar1 from './Navbar1';
import Footer from './Footer';
import { Link } from "react-router-dom";

    
const LoginForm = () => 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => 
  {
    e.preventDefault();

    axios
    .post("http://localhost:8080/api/login", null, {
      params: 
      {
        email: email,
        password: password
      }
    })
      .then((response) => 
      {
        console.log(response);
        if (response.status === 200) {
          alert("Login successfully.");
        }
      })
      .catch((error) => 
      {
        console.log(error);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div>
      <Navbar1/>
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          required
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <br />
        <input type="submit" value="Login" />
        <a href="/Profile">Login</a>
        <br />

       
        <div>
     < Link to="/Connect" className="btn">
             Farm Profile
          </Link>
        </div>

        <p>Not registered yet? </p>
        <p><a href="/Signup">Register Now</a></p>

      </form>

      </div>
       <Footer></Footer>
    </div>
  );
};

export default LoginForm;
