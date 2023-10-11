import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import "./2124880.css"
import {FaEye,FaEyeSlash} from "react-icons/fa";

const NAME_REGEX = /^[a-z ,.'-]+$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[£!@#$%]).{8,30}$/;
const PHN_REGEX = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/ ;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


const UserRegister = () => {
	

	const [owner_Profilepicture, setOwner_Profilepicture] = useState('');

	const [owner_Name, setOwner_Name] = useState('');
	const [validName, setValidName] = useState(false);
	const [nameFocus, setNameFocus] = useState(false);

	const [owner_Phonenumber, setOwner_Phonenumber] = useState('');
	const [validPhone, setValidPhone] = useState(false);
	const [phoneFocus, setPhoneFocus] = useState(false);

	const [owner_Email, setOwner_Email] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [owner_Password, setOwner_Password] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [Confirm_Owner_password, setConfirm_Owner_password] = useState('');
	const [validConfirm, setValidConfirm] = useState(false);
	const [confirmFocus, setConfirmFocus] = useState(false);

	const [showpassword, setShowpassword] = useState(false);
	const [showpassword1, setShowpassword1] = useState(false);

	const handleShow=()=>{
		setShowpassword(!showpassword)
	}

	const handleShow1=()=>{
		setShowpassword1(!showpassword1)
	}

	useEffect(() => {
		setValidName(NAME_REGEX.test(owner_Name));
	}, [owner_Name]);

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(owner_Email));
	}, [owner_Email]);


	useEffect(() => {
		setValidPassword(PWD_REGEX.test(owner_Password));
		setValidConfirm(owner_Password === Confirm_Owner_password);
	}, [owner_Password, Confirm_Owner_password]);

	useEffect(() => {
		setValidPhone(PHN_REGEX.test(owner_Phonenumber));
	}, [owner_Phonenumber]);

	useEffect(() => {
	}, [owner_Name, owner_Phonenumber, owner_Email, owner_Password, Confirm_Owner_password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			const response = await axios.post('http://localhost:8080/confirm-account1',{owner_Name ,owner_Password, owner_Profilepicture, owner_Email, owner_Phonenumber}
	
			).then((response) => {
				if(response.status === 200){
					alert('Registration Succesful please verify your email')
					window.location.reload();
					
					
				}
			}
			
			
			)}

			catch (err) {
				if (!err?.response) {
					alert('No Server Response');
					
					
				} else if (err.response?.status === 479) {
					alert('Email already in use');
				} else {
					alert('Registration Failed try again later');
				}
			}
			
		};
	return (
		<div className='Registrationform1'>
				<div className='Registrationcontent1' >
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>

						<label className='picture'>
							ProfilePicture:
						</label>
					<input
							type="file"
							id="owner_Profilepicture"
							onChange={(e) => setOwner_Profilepicture(e.target.value)}
							value={owner_Profilepicture}>
							</input>

						<label className="name">
							Name:
						</label>

						<input
							type="text" id="owner_Name"
							placeholder='Name' autoComplete="off"
							onChange={(e) => setOwner_Name(e.target.value)}
							value={owner_Name} required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby="namenote"
							onFocus={() => setNameFocus(true)}
							onBlur={() => setNameFocus(false)}
						/>
						<p id="namenote" className={nameFocus && owner_Name && !validName ? 'info' : 'infoOff'}>
						Name shouldnt contain numbers or special characters
						</p>
						
						<label className="phone3">
							Phone number:
						</label>


						<input
							type="text" id="owner_Phonenumber"
							placeholder='+44' onChange={(e) => setOwner_Phonenumber(e.target.value)}
							value={owner_Phonenumber} required
							aria-invalid={validPhone ? 'false' : 'true'}
							aria-describedby="phonenote"
							onFocus={() => setPhoneFocus(true)}
							onBlur={() => setPhoneFocus(false)}
						/>
						<p
							id="phonenote"
							className={
								phoneFocus && owner_Phonenumber && !validPhone ? 'info' : 'infoOff'
							}
						>
						Phoone number must be valid 
						</p>
							
						<label className="email3">
							Email:
						</label>

						<input
							type="text" id="owner_email"
							placeholder='@gmail.com' onChange={(e) => setOwner_Email(e.target.value)}
							value={owner_Email} required
							aria-invalid={validEmail ? 'false' : 'true'}
							aria-describedby="emailnote"
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
						/>
						<p id="emailnote" className={emailFocus && owner_Email && !validEmail ? 'info' : 'infoOff'}>
						Email must be valid
						</p>

						<label className='password'>
							Password:
						</label>

						<input
							type={showpassword?"text":"password"} id="owner_password"
							onChange={(e) => setOwner_Password(e.target.value)}
							value={owner_Password} required
							aria-invalid={validPassword ? 'false' : 'true'}
							aria-describedby="passwordnote"
							onFocus={() => setPasswordFocus(true)}
							onBlur={() => setPasswordFocus(false)}
						/><label classname="showpassword" onClick={handleShow}>{showpassword?<FaEyeSlash/>:<FaEye/>}</label>
						<p id="passwordnote" className={passwordFocus && !validPassword ? 'info' : 'infoOff'}>
							Password must be atleast 8 Character long
							<br></br>
							Password must atleast have a Uppercase and Lowercase Letter
							<br></br>
							Password must contain atleast 1 number
							<br></br>
							Password must contain atleast one special character
						</p>

						<label className='confirm_pwd'>
							Confirm Password:
						</label>

						<input
							type={showpassword1?"text":"password"} id="confirm_pwd"
							onChange={(e) => setConfirm_Owner_password(e.target.value)}
							value={Confirm_Owner_password} required
							aria-invalid={validConfirm ? 'false' : 'true'}
							aria-describedby="confirmnote"
							onFocus={() => setConfirmFocus(true)}
							onBlur={() => setConfirmFocus(false)}
						/><label classname="showpassword1" onClick={handleShow1}>{showpassword1?<FaEyeSlash/>:<FaEye/>}</label>
						<p id="confirmnote" className={confirmFocus && !validConfirm ? 'info' : 'infoOff'}>
						Password must match
						</p>

						<button disabled={!validName || !validPassword || !validConfirm || !validEmail || !validPhone ? true : false}>
							
							Sign Up

						</button>
					</form>
					<p> Already have an account
						<br></br>
						<span><a href="/login">Sign In</a></span>
					</p>
				</div>
			
		</div>
	);
};

export default UserRegister;


