import React, {Fragment, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const APIKEY = '5e2ef034ee4429608f79d03af9ea638b';

function App() {

  //state def
  const [city, setCity] = useState('');//Searchbar
  const [country, setCountry] = useState('');//Searchbar

  const [weather, setWeather] = useState([]); //API

  //API call
  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = async () => {
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIKEY}`)
    const info = await data.json()
    setWeather(info)
  }

  return (
    <>
        <SearchBar
          city = {city}
          setCity = {setCity}
          country = {country}
          setCountry = {setCountry}
        />
      <div>
        <WeatherCard 
          data = {weather}
        />
      </div>
    </>
  );
}

export default App;
