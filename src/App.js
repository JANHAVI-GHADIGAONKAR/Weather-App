import React, { useState, useEffect } from 'react';
import './App.css';
import './Weather.css';
import './country.css';
import CountryCard from './Components/CountryCard';
import SearchBar from './Components/SearchBar';
import WeatherDisplay from './Components/WeatherDisplay';
import companyLogo from './Images/logo.png';
import defaultBackgroundImage from './france.jpg';




function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('France');
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchWeatherData(selectedCountry);
  }, [selectedCountry]);

  const fetchWeatherData = async (country) => {
    const apiKey = 'b543da68018a588fb6d38cc7890d0310'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
      setBackgroundImage(`${country.toLowerCase()}.jpg`);
      
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };


  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleSearch = (searchQuery) => {
    setSelectedCountry(searchQuery);
  };
  const colors = ['#A020F0', '#2C81D1', '#2C81D1', '#F89880'];
  return (
    <>
    <section className='hero-section' style={{ backgroundImage: `url(${backgroundImage || defaultBackgroundImage}), url(./france.jpg)` }}>
      <div className="container">
      <img src={companyLogo} alt="Logo" className='logo' width="250" height="50"/>
      <div className="weather">
      <WeatherDisplay data={weatherData} />
      </div>
      
      </div>
      
    </section>
    <section className='searchbar'>
    <SearchBar onSearch={handleSearch} />
    </section>
    <section className="card-section">
    <div className="country-cards">
           <CountryCard country="France" backgroundColor={colors[0]} onClick={handleCountryClick}  />
           <CountryCard country="Africa" backgroundColor={colors[1]} onClick={handleCountryClick} />
           <CountryCard country="Qatar" backgroundColor={colors[2]} onClick={handleCountryClick} />
           <CountryCard country="Japan" backgroundColor={colors[3]} onClick={handleCountryClick}  />
           
    </div>
    </section>
    </>
    
  );
}

export default App;
