import axios from "axios";
import { useState } from "react";
import "./RegistrationStyles.css";
 
function Register()
{
   const [firstname, setFname] = useState("");
   const [lastname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [confirmpassword, setConfirmpassword] = useState("");

   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8013/save",
        {
      /*   id: id, */
        fname: firstname,
        lname : lastname,
        email : email,
        phone : phone,
        password : password,
        confirmpassword :confirmpassword

        });
          alert("User Registation Successfully");
          setFname("");
          setLname("");
          setEmail("");
          setPhone("");
          setPassword("");
          setConfirmpassword("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
 
            <input type="text"
            name="firstname"
            placeholder="Firstname"
            onChange={(event) =>
                {
                    setFname(event.target.value);      
                }}
            />
 
            <input type="text"
            name="lastname"
            placeholder="lastname"
            onChange={(event) =>
                {
                    setLname(event.target.value);      
                }}          
            />
 
            
            <input type="text"
            name="email"
            placeholder="email"
            onChange={(event) =>
                {
                    setEmail(event.target.value);      
                }}          
             />
           <input type="text"
            name="phone"
            placeholder="phone"
            onChange={(event) =>
                {
                    setPhone(event.target.value);      
                }}          
            />
 
           <input type="text"
            name="password"
            placeholder="password"
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
            />

            <input type="text"
            name="confirmpassword"
            placeholder="confirmpassword"
            onChange={(event) =>
                {
                    setConfirmpassword(event.target.value);      
                }}          
            />
 
            <button type="submit">Register</button>
 
    
            </form>    
 
    
        </div>
    )
}

export default Register;