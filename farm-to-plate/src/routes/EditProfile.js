import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import Footer from '../components/Footer'
import Navbar1 from '../components/Navbar1'
import '../components/2124880.css'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const NAME_REGEX = /^[a-z ,.'-]+$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHN_REGEX = /^((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/g;


const EditProfile = () => {
	
	const userRef = useRef();
    const [data, setData] = useState();
	const [Owner_ProfilePicture, setOwner_ProfilePicture] = useState('');

	const [Owner_name, setOwner_name] = useState('');
	const [validName, setValidName] = useState(false);
	const [nameFocus, setNameFocus] = useState(false);

	const [Owner_Phone_Number, setOwner_Phone_Number] = useState('');
	const [validPhone, setValidPhone] = useState(false);
	const [phoneFocus, setPhoneFocus] = useState(false);

	const [Owner_password, setOwner_Password] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [Confirm_Owner_password, setConfirm_Owner_password] = useState('');
	const [validConfirm, setValidConfirm] = useState(false);
	const [confirmFocus, setConfirmFocus] = useState(false);



	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setValidName(NAME_REGEX.test(Owner_name));
	}, [Owner_name]);

	useEffect(() => {
		setValidPassword(PWD_REGEX.test(Owner_password));
		setValidConfirm(Owner_password === Confirm_Owner_password);
	}, [Owner_password, Confirm_Owner_password]);

	useEffect(() => {
		setValidPhone(PHN_REGEX.test(Owner_Phone_Number));
	}, [Owner_Phone_Number]);

	useEffect(() => {
		setErrMsg('');
	}, [Owner_name, Owner_Phone_Number,  Owner_password, Confirm_Owner_password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

		useEffect(() => {let id=208
    axios.get(`http://localhost:9999/owner${id}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);
			
  
		
	return (
		<><Navbar1 /><div className='Registrationform1'>

			<div className='Registrationcontent1'>
				{data.map(item => (
				<><h1>Edit Profile</h1><form onSubmit={handleSubmit}>

						<input
							type="file"
							id="Owner_ProfilePicture"
							ref={userRef}
							onChange={(e) => setOwner_ProfilePicture(e.target.value)}
							value={Owner_ProfilePicture}>

						</input>
						<label className="name">
							Name:
							<div
								className={validName ? 'valid' : 'hide'} />
							<div
								className={validName || !Owner_name ? 'hide' : 'invalid'} />
						</label>
						<input
							type="text"
							id="Owner_name"
							placeholder='Name'
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setOwner_name(e.target.value)}
							value={Owner_name}
							required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby="namenote"
							onFocus={() => setNameFocus(true)}
							onBlur={() => setNameFocus(false)} />
						<p
							id="namenote"
							className={nameFocus && Owner_name && !validName ? 'instructions' : 'offscreen'}
						>
							Name shouldnt contain numbers or special characters
						</p>

						<label className="phone">
							Phone number:
							<div
								className={validName ? 'valid' : 'hide'} />
							<div
								className={validName || !Owner_name ? 'hide' : 'invalid'} />
						</label>
						<input
							type="text"
							id="Owner_Phone_Number"
							placeholder='+44'
							ref={userRef}
							onChange={(e) => setOwner_Phone_Number(e.target.value)}
							value={Owner_Phone_Number}
							required
							aria-invalid={validPhone ? 'false' : 'true'}
							aria-describedby="phonenote"
							onFocus={() => setPhoneFocus(true)}
							onBlur={() => setPhoneFocus(false)} />
						<p
							id="phonenote"
							className={phoneFocus && Owner_Phone_Number && !validPhone ? 'instructions' : 'offscreen'}
						>
							Must be valid phone number
						</p>

						<label className='password'>
							Password:
							<div

								className={validPassword ? 'valid' : 'hide'} />
							<div
								className={validPassword || !Owner_password ? 'hide' : 'invalid'} />
						</label>
						<input
							type="password"
							id="Owner_password"
							onChange={(e) => setOwner_Password(e.target.value)}
							value={Owner_password}
							required
							aria-invalid={validPassword ? 'false' : 'true'}
							aria-describedby="passwordnote"
							onFocus={() => setPasswordFocus(true)}
							onBlur={() => setPasswordFocus(false)} />
						<p
							id="passwordnote"
							className={passwordFocus && !validPassword ? 'instructions' : 'offscreen'}
						>
							<br />
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character.
						</p>

						<label className='confirm_pwd'>
							Confirm Password:
							<div
								className={validConfirm && Confirm_Owner_password ? 'valid' : 'hide'} />
							<div

								className={validConfirm || !Confirm_Owner_password ? 'hide' : 'invalid'} />
						</label>
						<input
							type="password"
							id="confirm_pwd"
							onChange={(e) => setConfirm_Owner_password(e.target.value)}
							value={Confirm_Owner_password}
							required
							aria-invalid={validConfirm ? 'false' : 'true'}
							aria-describedby="confirmnote"
							onFocus={() => setConfirmFocus(true)}
							onBlur={() => setConfirmFocus(false)} />
						<p
							id="confirmnote"
							className={confirmFocus && !validConfirm ? 'instructions' : 'offscreen'}
						>
							<br />
							Password must match
						</p>

						<button
							disabled={!validName || !validPassword || !validConfirm || !validPhone ? true : false}

						>
							Edit
						</button>

					</form></>
			 	 ))} 
			 </div>
					
		</div>
		<Footer/>
		
		</>
				
				
	);
    
};

export default EditProfile;
