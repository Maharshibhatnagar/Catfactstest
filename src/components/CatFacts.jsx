import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatFacts = () => {
  const [fact, setFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  const handleRefresh = () => {
    fetchCatFact();
  };

  return (
    <div>
      <h1>Cat Facts | Maharshi</h1>
      <p>{fact}</p>
       {/* <button onClick={handleRefresh}>Refresh</button>  */}
      {/* <button className="refresh-button" onClick={handleRefresh}>Refresh</button> */}
      <div className="button-container">
  <button className="refresh-button" onClick={handleRefresh}>Refresh</button>
</div>


    </div>
  );
};

export default CatFacts;
