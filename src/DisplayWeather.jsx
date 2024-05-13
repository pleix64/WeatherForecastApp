import React, { useState, useEffect } from 'react';

function DisplayWeather() {
    //const [data, setData] = useState(null);

    // console.log(data);

    // useEffect(() => {
    //     fetch('https://api.journey.skillreactor.io/r/f/weather')
    //     .then((response) => {
    //         console.log('Reponse is ', response);
    //         response.json();})
    //     .then((data) => setData(data))
    //     .catch((error) => console.error('API Call Failed: ', error));
    // }, []);
    // console.log('After loading...')
    // console.log(data);
    // will be interactive later...
    let cityName = 'New York';
    //const results = data.filter((city) => city === cityName);
    const results = data;

    return (
        <div>
          {data ? (
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