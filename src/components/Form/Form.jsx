import CitiesListing from "../CitiesListing/CitiesListing";
import "./styles.css";
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import WeatherData from "../WeatherData/WeatherData";

function Form() {
    const apiKey = "";

    const [showWeatherData, setShowWeatherData] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [latAndLong, setLatAndLong] = useState({ lat: null, lon: null });

    const hasMounted = useRef(false);

    useEffect(() => {
        if (hasMounted.current) {
            const fetchData = async () => {
                // Fetch country location
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

    useEffect(() => {
        console.log(latAndLong);
    }, [latAndLong]);

    useEffect(() => {
        console.log(weatherData);
    }, [weatherData]);

    function handleShowWeatherData(cityName) {
        setInputValue(cityName);
        if (!showWeatherData) {
            setShowWeatherData(true);
        }
        setToggleSearch(!toggleSearch);
    }

    function handleSearchClick() {
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
            } else {
                console.error("No results found");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const fetchCountryWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLong.lat}&lon=${latAndLong.lon}&appid=${apiKey}&lang=pt_br`);
            const result = await response.json();
            setWeatherData(result);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="form">
            <h1>Confira o clima de uma cidade:</h1>
            <div className="form-input-area">
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Digite o nome da cidade"
                    onChange={handleChange}
                />
                <button onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} />
                </button>
            </div>
            <div className="display-area">
                <CitiesListing handleClick={handleShowWeatherData} />
            </div>
            {showWeatherData && weatherData && <WeatherData data={weatherData} />}
        </div>
    );
}

export default Form;
