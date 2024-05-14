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
            <div>Loading...</div>
          )}
        </div>
        <div>
          {userInput && nextDays.length ? 
          nextDays.map( (aDay) => (
            <div id={'data_'+aDay.dayOfWeek.toLowerCase()}>
              <h3 class='weekDay'>{aDay.dayOfWeek}</h3>
              <p class='temperature'>{aDay.temperature}</p>
              <p class='humidity'>{aDay.humidity}</p>
              <p class='windSpeed'>{aDay.windSpeed} m/s</p>
            </div>
          )) : (
            <div>Next Days...</div>
          )}
        </div>
      </>
    );

    // return (
    //     <>
    //     {data ? (
    //         <div>        
    //             <div id='mainCity'>{results[0].city}</div>
    //             <div id='mainWeekday'>{results[0].dayOfWeek}</div>
    //             <div id='mainTemperature'>{results[0].temperature}</div>
    //             <div id='mainHumidity'>{results[0].humidity}</div>
    //             <div id='mainWindSpeed'>{results[0].windSpeed}</div>
    //         </div>
    //     ) : (
    //         <div>Loading...</div>
    //     )}
    //    </>
        
    // );
}

export default DisplayWeather;