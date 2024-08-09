import styles from "./styles.css"

import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLocationDot, faFlag, faCloud, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';

function WeatherData(weatherData) {

    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState();
    const [weather, setWeather] = useState("");
    const [humidity, setHumidity] = useState();
    const [windSpeed, setWindSpeed] = useState();

    useEffect(() => {
        console.log(weatherData)
        setCity(weatherData.data.name);
        setTemperature(weatherData.data.main.temp);
        setWeather(weatherData.data.weather[0].description);
        setHumidity(weatherData.data.main.humidity);
        setWindSpeed(Math.floor(weatherData.data.wind.speed * 3.6));
    }, [])

    return(
        <div className="weatherDataMain">
            <div className="cityInfo">
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} />
                <h3>{city}</h3>
                <FontAwesomeIcon icon={faFlag} style={{color: "#ffffff",}} />
            </div>
            <h1>{Math.floor(temperature)}ºC</h1>
            <div className="weatherStatus">
                <h3>{weather}</h3>
                <FontAwesomeIcon icon={faCloud} style={{color: "#000000",}} />
            </div>
            <div className="weatherDetails">
                <div className="humidity">
                    <FontAwesomeIcon icon={faDroplet} style={{color: "#ffffff",}} />
                    <h3>{Math.floor(humidity)}%</h3>
                </div>
                <div className="divisor"></div>
                <div className="windSpeed">
                    <FontAwesomeIcon icon={faWind} style={{color: "#ffffff",}} />
                    <h3>{windSpeed}km/h</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherData;