import React, {Fragment, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const APIKEY = '5e2ef034ee4429608f79d03af9ea638b';

function App() {

  //state def
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [weather, setWeather] = useState([]); //ver bien!!

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
        <SearchBar />
      <div>
        <WeatherCard 
          city = {weather.name}
          //country = {weather.sys.country}
          //description = {weather.weather[0].description}
        />
      </div>
    </>
  );
}

export default App;
