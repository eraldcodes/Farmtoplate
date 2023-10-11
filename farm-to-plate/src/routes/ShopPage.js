import React, { useState, useEffect } from 'react';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';
import farmPic from '../img/farmPic.jpeg';
import axios from 'axios';
import Reviews from '../components/Reviews'
import {useParams} from 'react-router-dom';
import "./shoppage.css"







function ShopPage() {
  const [data, setData] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/FarmInformation/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, [id]);

  
   return (
    <div>
      <Navbar1 />
      
      <h1 style = {{color: "black", paddingTop : 110, textAlign: 'center' }}>{data.farmName}</h1>      
      <div className='shopcontainer'>
        <div className='shopimg'>
      <img width="500"
            height="315"
        src={farmPic}/>
        </div>
        <div className='shopmap'>
         <iframe
            width="500"
            height="315"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDDLRdJe26kzZydgWD_LR_EjGTvsuT9gjw&q=${encodeURIComponent(data.farm_location)}`}>
          </iframe>
          </div>
          </div>
      <p style = {{ color: "red", textAlign: 'center' , paddingTop : 50, paddingBottom : 10, fontSize : 20  }}>{data.farmDescription}</p>
      <p style = {{ color: "red",  paddingBottom : 10 , fontSize: 20, textAlign: 'center' }}>Opening times: {data.opening_hour}</p>
      <p style = {{ color: "red",  paddingBottom : 50 , fontSize: 20, textAlign: 'center' }}>Contact us on:  {data.email}</p>
      <Reviews/>
      <Footer/>   
      
      </div>
    
  );
}

export default ShopPage