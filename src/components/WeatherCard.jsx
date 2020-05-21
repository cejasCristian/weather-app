
import React from 'react';
import './WeatherCardStyle.css';
import PropTypes from 'prop-types';

//  react/prop-types
const WeatherCard = ({ main, name, sys, wind, weather }) => {

  let id = weather[0].id;

  const weatherIcons = (id) => {
  
    const weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
    }

    let icon = '';
  
    switch(id){
        case id >= 200 && id < 232:
            icon = weatherIcon.Thunderstorm;
            break;
        case id >= 300 && id < 321:
            icon = weatherIcon.Drizzle;
            break;
        case id >= 500 && id < 521:
            icon = weatherIcon.Rain;
            break;
        case id >= 600 && id < 622:
            icon = weatherIcon.Snow;
            break;
        case id >= 701 && id < 781:
            icon = weatherIcon.Atmosphere;
            break;
        case id === 800:
            icon = weatherIcon.Clear;
            break;
        case id >= 801 && id < 804:
            icon = weatherIcon.Clouds;
            break;
        default:
            icon = weatherIcon.Clear;
    }

    return `wi ${icon} display-1`;

}

  const newIcon = weatherIcons(id);

  //Date
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
      {( name != '' && sys.country != '') ? (
        <div className='container'>
          <div className='row justify-content-md-center m-3'>
            <div className='col col-md-4 weatherCard'>
              <div className='head'>
                <h1 className='text-center display-4'>{name}, {sys.country}</h1>
                <h6 className='text-center display-8'>{dateBuilder(new Date())}</h6>
                <div id='' className='text-center'>
                  <i id='icon' className={newIcon}/>
                  <p id='desc'>{weather[0].main}</p>
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
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
    })
  ),
};

WeatherCard.defaultProps = {
  main: {},
  name: '',
  sys: {},
  wind: {},
  weather: [
    {
      main:'',
      id:'',
    },
  ],
};

export default WeatherCard;
