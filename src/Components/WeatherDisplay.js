import React from 'react';

function WeatherDisplay({ data }) {
  if (!data) return null;

  const { main, weather, name, wind } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  const country= name;
  const humidity= main.humidity;
  const deg= wind.deg;

  return (
    <>
    
        <div className="weather-display">
            <h2 className='country'>{country}</h2>
            <p className='temp'>{temperature}</p>
            <p className='description'> {description}</p>
        </div>
        <div className="humidity-wind">
            <div className="humidity">
                <h5>HUMIDITY</h5>
                <p>{humidity}%</p>
            </div>
            <div className="wind">
                <h5>WIND</h5>
                <p>{deg}K/M</p>
            </div>

        </div>  
    
    
    </>
    
  );
}

export default WeatherDisplay;
