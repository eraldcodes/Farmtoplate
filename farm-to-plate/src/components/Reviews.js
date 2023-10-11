import { useState,useRef } from "react";
import axios from "axios";
import './Reviews.css';




const Reviews = () => {
  const reviewref =useRef();

  const[user_name, setUser_name] = useState('');
  const[user_email, setUser_email] = useState('');
  const[user_review, setUser_review] = useState('');
  const[user_rating, setUser_rating] = useState('');
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
			const response = await axios.post('http://localhost:8080/addTData',{user_name, user_email, user_review, user_rating }
	
			).then((response) => {
				if(response.status === 200){
					alert('Review added succesfully')
    
            console.log(response);
            window.location.reload();
				}
			}
			
			
			)}

			catch (err) {
				if (!err?.response) {
					alert('No Server Response');
				} else {
					alert('Request Failed try again later');
				}
			}
			
		};
  return (
<div className="reviewbackground">
      <div className="reviewsection">
      <form onSubmit={handleSubmit}>
      <h2>Leave your Reviews</h2>
        <label>Rating</label>
        <div className="starwrapper">
          <input  type="radio" name="user_rating" value={1} ref={reviewref}  onChange={(e) => setUser_rating(e.target.value)}id="1"/><label htmlFor="1"></label>
          <input type="radio" name="user_rating" value={2} ref={reviewref}  onChange={(e) => setUser_rating(e.target.value)}id="2"/><label htmlFor="2"></label>
          <input  type="radio" name="user_rating" value={3} ref={reviewref}  onChange={(e) => setUser_rating(e.target.value)}id="3"/><label htmlFor="3"></label>
          <input  type="radio" name="user_rating" value={4} ref={reviewref}  onChange={(e) => setUser_rating(e.target.value)}id="4"/><label htmlFor="4"></label>
          <input  type="radio" name="user_rating"value={5} ref={reviewref}  onChange={(e) => setUser_rating(e.target.value)} id="5"/><label htmlFor="5"></label>
          </div>
          
          <label>Name</label>
          <input type="text" name="user_name" ref={reviewref} onChange={(e) => setUser_name(e.target.value)}/>
          <label>Email</label>
          <input type="email" name="user_email" ref={reviewref} onChange={(e) => setUser_email(e.target.value)} />
          <label>Review</label>
          <textarea type="text" name="user_review" ref={reviewref} onChange={(e) => setUser_review(e.target.value)}/>
<button type ='submit'>Add Send </button>
      </form>
    </div>
    </div>
    
  );

  };

  export default Reviews