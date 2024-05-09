import React from 'react';

function GetWeather({cityName, onChange}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log(cityName);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your location"
          value={cityName}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default GetWeather;