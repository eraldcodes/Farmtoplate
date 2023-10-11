import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar1 from '../components/Navbar1';
import Blankpage from '../components/Blankpage';

import '../components/2124880.css';
import EditProfile from './EditProfile';
import { Link } from 'react-router-dom';
import { number } from 'prop-types';
import './profile.css';
import axios from 'axios';

const Profile1 = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch the profile data from an API
    axios
      .get(`http://localhost:8080/owner${props.id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar1 />
      <div className='Profile'>
        <img src={data.Onwer_ProfilePicture} alt={data.Owner_name} />
        <h2>{data.Owner_name}</h2>
        <p>{data.Owner_Email}</p>
        <p>{data.Owner_Phone_Number}</p>
      </div>
      <div
        style={{
          Button: 'Edit',
          color: 'rgb(105, 30, 30)',
          height: '300px',
          width: '200px',
          alignContent: 'end',
        }}
      >
        <li>
          <Link to='/EditProfile'>EditProfile</Link>
        </li>
      </div>
      <Footer />
    </>
  );
};

export default Profile1;
