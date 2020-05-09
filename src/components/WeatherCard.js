import React from 'react'
import './WeatherCardStyle.css';

const WeatherCard = ({data}) => {

    return (
        <div className = 'container'>
            <div className = 'row'>
                <div className = 'col-4 weatherCard offset-md-4'>
                    <div className = 'head'>
                        <h1 className = 'text-center display-4'>{data.name}, country</h1>
                        <h6 className = 'text-center display-8'>Wednesday,6</h6>
                        <div id = '' className = 'text-center'> 
                            <i id = 'icon' className = 'wi wi-day-rain-mix'></i>
                            <p id = 'desc'>descripcion</p>
                            <h2 className = 'display-4'>25 °C</h2>
                            <h4 className = 'display-6'>MAX MIN</h4>
                        </div>
                    </div>
                    <div className = 'otherInfo'>
                        <div className = 'row'>
                            <div className = 'pressure col-4 text-center'>
                                <i className = 'wi wi-barometer'></i>
                                <span> Pressure</span>
                            </div>
                            <div className = 'humidity col-4 text-center'>
                                <i className = 'wi wi-humidity'></i>
                                <span> Humidity</span>
                            </div>
                            <div className = 'windspeed col-4 text-center'>
                                <i className = 'wi wi-strong-wind'></i>
                                <span>wspeed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;