
import React, { useRef, useState} from 'react';
import axios from "axios";
import "./Farmstory.css";


const FarmStory = () => {
  const storyref =useRef();

  const[name, SetName] = useState('');
  const[story, SetStory] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
			const response = await axios.post('http://localhost:8080/addstory',{name, story}
	
			).then((response) => {
				if(response.status === 200){
					alert('Story added succesfully')
    
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
    <div>
<div className='farmstorywallpaper'>
  <div className='farmstorycontent'>
      
  <h1 className='heading'>Add Farm Story</h1> <br></br><br></br>
      <form onSubmit={handleSubmit}>
      <label className='LABEL1'>Farm Name:  </label> <br></br>
      <input className='LBL1' ref={storyref}
      onChange={(e) => SetName(e.target.value)}
      value={name}
        required>
      </input>
       <br/> <br/>
      <label className='LABEL2'>Farm Story:  </label> <br></br>
        <input className='farmnamebox' ref={storyref}
      onChange={(e) => SetStory(e.target.value)}
      value={story}
        required></input>
 <br/> <br/>
<br/> <br/> 
<button className='storyadd'>Add Farm Story</button>
      </form>
    </div>
    </div>
    </div>
  );

  };


  export default FarmStory
