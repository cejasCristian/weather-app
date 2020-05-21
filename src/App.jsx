import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Spinner from './components/Spinner';
import './app.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const APIKEY = '5e2ef034ee4429608f79d03af9ea638b';

function App() {

  const [weathers, setWeathers] = useState({}); // API
  const [loading, setLoading] = useState (false);

  const handleInfoFromSearchbar = (info) => {
    fetchData(info[0],info[1]);
  };

  const fetchData = async (newCity = '', newCountry = '') => {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${newCity},${newCountry}&appid=${APIKEY}&units=metric`
    );
    const info = await data.json();
    setWeathers(info);
  };

  // API call
  useEffect(() => {
    fetchData();
  }, []);

  const { main, name, sys, wind, weather } = weathers;


  console.log('API', weathers);

  let component;

  if(loading) {
    component = <Spinner />
  } else {
    component = <WeatherCard 
                  main={main} 
                  name={name}
                  sys={sys}
                  wind={wind}
                  weather={weather}
                />
  }

  return (
    <>
      <SearchBar
        getInfo={handleInfoFromSearchbar}
        setLoading={setLoading}
      />
      {component}
    </>
  );
}

export default App;
