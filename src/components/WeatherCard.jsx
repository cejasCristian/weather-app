import React from 'react';
import './WeatherCardStyle.css';
import PropTypes from 'prop-types';

//  react/prop-types
const WeatherCard = ({ main, name, sys, wind, weather }) => {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  

  return (
    <>
      {( name != '') ? (
        <div className='container'>
          <div className='row'>
            <div className='col-4 weatherCard offset-md-4'>
              <div className='head'>
                <h1 className='text-center display-4'>{name}, {sys.country}</h1>
                <h6 className='text-center display-8'>{dateBuilder(new Date())}</h6>
                <div id='' className='text-center'>
                  <i id='icon' className='wi wi-day-rain-mix' />
                  <p id='desc'>{weather.description}</p>
                  <h2 className='display-4'>{Math.round(main.temp)} °C</h2>
                  <div className='row'>
                    <div className='col-6 text-center'>
                      <h4 className='display-6'>
                        MAX: {Math.round(main.temp_max)} °C
                      </h4>
                    </div>
                    <div className='col-6 text-center'>
                      <h4 className='display-6'>
                        MIN: {Math.round(main.temp_min)} °C
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='otherInfo'>
                <div className='row'>
                  <div className='pressure col-4 text-center'>
                    <i className='wi wi-barometer' />
                    <span> {main.pressure} hPA</span>
                  </div>
                  <div className='humidity col-4 text-center'>
                    <i className='wi wi-humidity' />
                    <span> {main.humidity}%</span>
                  </div>
                  <div className='windspeed col-4 text-center'>
                    <i className='wi wi-strong-wind' />
                    <span> {wind.speed} km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : ('')}
    </>
  );
};

WeatherCard.propTypes = {
  main: PropTypes.object,
  name: PropTypes.string,
  sys: PropTypes.object,
  wind: PropTypes.object,
  weather: PropTypes.array
};

WeatherCard.defaultProps = {
  main: {},
  name: '',
  sys: {},
  wind: {},
  weather: [],
};

export default WeatherCard;
