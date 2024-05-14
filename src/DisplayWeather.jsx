import React from 'react';

const timeZone = {
  "New York": "America/New_York",
  "Tokyo": "Asia/Tokyo",
  "London": "Europe/London",
  "Paris": "Europe/Paris",
  "Sydney": "Australia/Sydney"
}

function DisplayWeather({userInput, data}) {
  const results = data ? data.filter((datum) => datum.city === userInput) : [];
  let now = new Date();
  let localTime = new Date(now.toLocaleString("en-US", {timeZone: timeZone[userInput]}));
  let day = localTime.getDay();

  const nextDays = [];
  if(results.length) {
    for(let i = 1; i < 7; i++) {
      nextDays.push(results[(day + i) % 7]);
    }
  }

  return (
    <>
      <div>
        {userInput && results.length ? (
          <div>
            <div id='mainCity'>{results[day].city}</div>
                <div id='mainWeekday'>{results[day].dayOfWeek}</div>
                <div id='mainTemperature'>{results[day].temperature}</div>
                <div id='mainHumidity'>{results[day].humidity}</div>
                <div id='mainWindSpeed'>{results[day].windSpeed} m/s</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {userInput && nextDays.length ? 
        nextDays.map( (aDay) => (
          <div id={'data_'+aDay.dayOfWeek.toLowerCase()}>
            <h3 className='weekDay'>{aDay.dayOfWeek}</h3>
            <p className='temperature'>{aDay.temperature}</p>
            <p className='humidity'>{aDay.humidity}</p>
            <p className='windSpeed'>{aDay.windSpeed} m/s</p>
          </div>
        )) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default DisplayWeather;