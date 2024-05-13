import React from 'react';

function DisplayWeather({userInput, data}) {

  //const results = data.filter((city) => city === userInput);

    return (
        <div>
          {userInput && data ? (
            <div>{JSON.stringify(data)}</div>
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