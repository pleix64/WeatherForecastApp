import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({inputValue, onInputValueChange, onSubmit}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    fetch('https://api.journey.skillreactor.io/r/f/weather')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }  
      return response.json();
    })
    .then((data) => {
      onSubmit(data);
    })
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
  
SearchBar.prototype = {
  inputValue: PropTypes.string.isRequired,
  onInputValueChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SearchBar;