import React from 'react';

function SearchBar({inputValue, onInputValueChange, data, setData}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      fetch('https://api.journey.skillreactor.io/r/f/weather')
      .then((response) => {response.json();})
      .then((data) => setData(data))
      .catch((error) => console.error('API Call Failed: ', error));
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          id='cityInput'
          type="text"
          placeholder="Enter your location"
          value={inputValue}
          onChange={(e) => onInputValueChange(e.target.value)}
        />
        <button id='submitBtn' type="submit">Submit</button>
      </form>
    );
  }
  
  export default SearchBar;