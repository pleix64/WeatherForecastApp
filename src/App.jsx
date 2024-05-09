import React, { useState } from "react";
import "./App.css";
import GetWeather from "./GetWeather";

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
       <GetWeather    
          cityName={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
      />
      </header>
    </div>
  );
}

export default App;
