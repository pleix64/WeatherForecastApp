import React from 'react';

function DisplayWeather({userInput, data}) {

  // NEXT TO-DO:
  // implement filter and display data as required. 

  const results = data ? data.filter((datum) => datum.city === userInput) : [];

    return (
        <div>
          {userInput && results.length ? (
            <div>
              <div id='mainCity'>{results[0].city}</div>
                 <div id='mainWeekday'>{results[0].dayOfWeek}</div>
                 <div id='mainTemperature'>Temperature: {results[0].temperature} degree</div>
                 <div id='mainHumidity'>Humidity: {results[0].humidity}%</div>
                 <div id='mainWindSpeed'>Wind: {results[0].windSpeed} m/s</div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
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