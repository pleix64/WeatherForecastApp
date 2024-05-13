import React, { useState } from "react";
import "./App.css";
import DisplayWeather from "./DisplayWeather";
import SearchBar from "./SearchBar";

function App() {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState(null);

  const updateData = (d) => {
    setData(d);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar 
          inputValue={cityName}
          onInputValueChange={setCityName}
          onSubmit={updateData}
        />
        <DisplayWeather 
          userInput={cityName} 
          data={data}
        />
      </header>
    </div>
  );
}

export default App;
