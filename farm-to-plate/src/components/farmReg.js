import React, {useRef} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./FarmRegistration.css";
import { useForm } from 'react-hook-form';
import {useState} from "react";

export default function FarmRegistration(){
    const name=useRef();
    const farmLocation=useRef();
    const email=useRef('');
    const description=useRef();
    const establishDate=useRef();
    const file=useRef();
    const veg=useRef();
    const fruit=useRef();
    const both=useRef();
    const siteSeeing=useRef();
    const parking=useRef();
    const openingHour=useRef();
    const WeekDays=useRef();
    const WeekEnd=useRef();
    const AllDays=useRef();
    const tos=useRef();

    const validateForm = () => {
        let formValid = false;

        if (name.current.validity.valueMissing 
            || email.current.validity.valueMissing 
            || description.current.validity.valueMissing
            || openingHour.current.validity.valueMissing
            || establishDate.current.validity.valueMissing){
                alert("Please fill in all text fields.");
        }
        else if (email.current.validity.typeMismatch){
            alert("Invalid e-mail address. Please enter your e-mail again.");  
        }else if (!veg.current.checked && !fruit.current.checked && !both.current.checked){
            alert("Please check at least one checkbox to select veg, fruits or others.")

        }else if (!WeekDays.current.checked && !WeekEnd.current.checked && !AllDays.current.checked){
            alert("Please check your open days.")
           

        } else if (tos.current.validity.valueMissing){
            alert("Please agree to the Terms and Conditions, and Privacy Policy.")
        }else{
            formValid = true;
        }
        return formValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(validateForm()){
            let veg_fruit_both=[veg.current.checked,fruit.current.checked,both.current.checked]
            let siteSeeing_parking=[siteSeeing.current.checked,parking.current.checked]
            let opendays=[WeekDays.current.checked,WeekEnd.current.checked,AllDays.current.checked]
            axios.post('http://localhost:8080/user',{
                name: name.current.value,
                farmLocation:farmLocation.current.value,
                email: email.current.value,
                description:description.current.value,
                openingHour:openingHour.current.value,
                establishDate:establishDate.current.value,
                file:file.current.value,
                veg_fruit_both: veg_fruit_both,
                siteSeeing_parking:siteSeeing_parking,
                opendays:opendays,
            }).then(response=>{
                console.log(response);
                if (response.status === 201){
                    alert("Registered successfully.")
                }
            }).then(()=>{
                name.current.value="";
                email.current.value="";
                farmLocation.current.value="";
                description.current.value="";
                openingHour.current.value=""
                establishDate.current.value="";
                file.current.value="";
                veg.current.checked=false;
                fruit.current.checked=false;
                both.current.checked=false;
                siteSeeing.current.checked=false;
                parking.current.checked=false;
                WeekDays.current.checked=false;
                WeekEnd.current.checked=false;
                AllDays.current.checked=false;
                tos.current.checked=false;
            })
            .catch(error=>{
                console.log(error);
            });
        
        }}
    
    return ( <div className="farmRegister">
    
        <h2>Farm Registration</h2>
        <span>Register Your Farm</span>
       
        <form className="farmRegistration" noValidate onSubmit={handleSubmit}>
            <label className="farmLabelText" >Farm Name: </label>
            <input type="text" placeholder='Farm Name' ref={name} required/><br/><br/>

            <label className="farmLabelText">Email Address:</label>
            <input type="email" placeholder='Email Address' ref={email} name="email" required /><br/><br/>
             
            <label className="farmLabelText">Farm Location:</label>
            <input type="text" placeholder='Farm Location' ref={farmLocation}  name="farmLocation" required /><br/><br/>

            <label className="farmLabelText">Upload files: </label>
            <input type="file" placeholder='upload image' ref={file}  name="file" required /><br/><br/>

            <label className="farmLabelText">Extasblished date: </label>
            <input type="date" placeholder='establish date' ref={establishDate}  name="establishDate" required /><br/><br/>
        
        
            <label className="farmLabelText">Farm Description: </label>
            <textarea placeholder='Farm Description' ref={description}  name="description" required /><hr></hr>

            <label className="farmLabelText">Your Produces</label><br/>
            <input type="checkbox" ref={veg} name="veg" value="veg"/>
            <label>Veg</label>
            <input type="checkbox" ref={fruit} name="fruit" value="fruit"/>
            <label>Fruits</label>
            <input type="checkbox" ref={both} name="Both" value="Both"/>
            <label>Both</label><br/><br/>

            <label className="farmLabelText">Farm Features</label><br/>
            <input type="checkbox" ref={siteSeeing} name="siteSeeing" value="siteSeeing"/>
            <label>Site-seeing</label><br/>
            <input type="checkbox" ref={parking} name="parking" value="parking"/>
            <label>Parking</label><br/>
            

            <label className="farmLabelText" >Opening hours: </label>
            <input type="text" placeholder='8am to 22pm' ref={openingHour} required/><br/><br/>
         
            <label className="farmLabelText">Open days</label><br/>

            <input type="checkbox" ref={WeekDays} name="WeekDays" value="WeekDays"/>
            <label>WeekDays</label>
            <input type="checkbox" ref={WeekEnd} name="WeekEnd" value="WeekEnd"/>
            <label>WeekEnd</label>
            <input type="checkbox" ref={AllDays} name="AllDays" value="AllDays"/>
            <label>AllDays</label>
            
            <br></br>
            <br></br>
            <input type="checkbox" ref={tos} name="tos" value="tos" required/>
            <label>I agree to the Terms of Use and Privacy Policy.</label>
            <br/><br/>
            
            <input type="submit" value="Submit"/> 
        </form>   
      </div>
        
    )}

