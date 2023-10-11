
import "./DisplayStory.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayStory() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8080/readstory/2'); // replace 1 with the ID you want to fetch
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p >Loading data...</p>
      ) : (
        <div>
          <h1 className="stheading">{data.name}</h1>
          <p className="stpara">{data.story}</p>
        </div>
      )}
    </div>
  );
}




export default DisplayStory;







