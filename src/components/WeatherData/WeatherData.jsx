import styles from "./styles.css"

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLocationDot, faFlag, faCloud, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';

function WeatherData() {

    const [city, setCity] = useState("Osaka");
    const [temperature, setTemperature] = useState(28.5);
    const [weather, setWeather] = useState("Nublado");
    const [humidity, setHumidity] = useState(55.2);
    const [windSpeed, setWindSpeed] = useState(2.2);

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