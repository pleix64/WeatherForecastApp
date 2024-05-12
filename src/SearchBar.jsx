import React from 'react';

function SearchBar({inputValue, onInputValueChange}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
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