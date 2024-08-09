import CitiesListing from "../CitiesListing/CitiesListing";
import "./styles.css";
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import WeatherData from "../WeatherData/WeatherData";
import LoadingState from "../LoadingState/LoadingState";
import ErrorResponse from "../ErrorResponse/ErrorResponse";

function Form() {
    const apiKey = "a857d7998b35e3195c83ac691355677a";

    const [showWeatherData, setShowWeatherData] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [latAndLong, setLatAndLong] = useState({ lat: null, lon: null });
    const [responseError, setResponseError] = useState(false);

    const hasMounted = useRef(false);

    useEffect(() => {
        setWeatherData("");
        if (hasMounted.current) {
            const fetchData = async () => {
                await fetchCountryLocation();
            };
            fetchData();
        } else {
            hasMounted.current = true;
        }
    }, [toggleSearch]);

    useEffect(() => {
        if (latAndLong.lat && latAndLong.lon) {
            // Fetch weather data only when latAndLong has valid values
            const fetchWeather = async () => {
                await fetchCountryWeatherData();
            };
            fetchWeather();
        }
    }, [latAndLong]);

    /*
    useEffect(() => {
        console.log(latAndLong);
    }, [latAndLong]);
    

    useEffect(() => {
        console.log(weatherData);
    }, [weatherData]);
    */

    function handleShowWeatherData(cityName) {
        setInputValue(cityName);
        if (!showWeatherData) {
            setShowWeatherData(true);
        }
        setToggleSearch(!toggleSearch);
    }

    function handleSearchClick() {
        if (!showWeatherData) {
            setShowWeatherData(true);
        }
        setToggleSearch(!toggleSearch);
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    const fetchCountryLocation = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${apiKey}`);
            const result = await response.json();
            if (result.length > 0) {
                const { lat, lon } = result[0];
                setLatAndLong({ lat, lon });
                setResponseError(false);
            } else {
                setResponseError(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const fetchCountryWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLong.lat}&lon=${latAndLong.lon}&appid=${apiKey}&lang=pt_br&units=metric`);
            const result = await response.json();
            setWeatherData(result);
        } catch (err) {
            console.log(err);
        }
    };

    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            handleSearchClick();
        }
    }

    return (
        <div className="form">
            <h1>Confira o clima de uma cidade:</h1>
            <div className="form-input-area">
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Digite o nome da cidade"
                    onChange={handleChange}
                    onKeyDownCapture={handleKeyPress}
                />
                <button onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} />
                </button>
            </div>
            <div className="display-area">
                {responseError && <ErrorResponse/>}
                {showWeatherData && !weatherData && !responseError && <LoadingState/>}
                {showWeatherData && weatherData && <WeatherData data={weatherData} />}
                {!showWeatherData && <CitiesListing handleClick={handleShowWeatherData} />}
            </div>
        </div>
    );
}

export default Form;
