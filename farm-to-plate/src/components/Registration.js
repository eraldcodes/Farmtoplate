import "./RegistrationStyles.css";
import React, { useState } from "react";
import "react-router-dom";
import CoverImg from "../img/pexels-eberhard-grossgasteiger-2088170.jpg"
import FormInput from "./Forminput";
import axios from "axios";
import Profile from "../routes/Profile"

  /* const[ editMode, setEditMode] = useState(false); */

/* const changeToFalse =() => {
  setEditMode(false); 
}*/

function Registration() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "firstname",
      placeholder: "Firstname",
      errorMessage: "Username shouldn't include any special character or numbers!",
      label: "Username",
      pattern: "^[A-Za-z]",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "lastname",
      placeholder: "Lastname",
      errorMessage: "Username shouldn't include any special character or numbers!",
      label: "Username",
      pattern: "^[A-Za-z]",
      required: true,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "phone",
      placeholder: "Phone",
      label: "PhoneNumber",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Registration;

