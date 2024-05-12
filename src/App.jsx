import React, { useState } from "react";
import "./App.css";
import DisplayWeather from "./DisplayWeather";
import SearchBar from "./SearchBar";

function App() {
  const [cityName, setCityName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
      <SearchBar 
          inputValue={cityName}
          onInputValueChange={setCityName}
      />
      <DisplayWeather />
      <div>{cityName}</div>
      </header>
    </div>
  );
}

export default App;
