import React, {useRef} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./styles.css";
import { useForm } from 'react-hook-form';


export default function Confirmemailfp(){
    const email=useRef();

const validateForm = () => {
    let formValid = false;

    if (email.current.validity.valueMissing ){
            alert("*This field is required");}

            else if (email.current.validity.typeMismatch){
                alert("Invalid e-mail address");}

            else{
                formValid = true;
            }
            return formValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(validateForm()){
        axios.post('https://reqres.in/api/users',{
            email: email.current.value,}

        ).then(response=>{
            console.log(response);
            if (response.status === 201){
                alert("Registered successfully.")
            }
        
        }).then(()=>{
            email.current.value="";

        })
        .catch(error=>{
            console.log(error);
        })
    }
  
}
  return (
    <div className="confirmemailbackground">
        <div className="confirmemailcontent">
        <h2>Forgotten your password ?</h2><br/><br/>
        <p>Please enter the email address you use to access your account. We'll send you a link to change your password</p><br/><br/>
        <form noValidate onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input type="email" placeholder='@gmail.com' ref={email} name="email" required /><br/><br/>
        <button type="Submit">Submit</button>
        </form>
        </div>
    </div>
  )

  }
