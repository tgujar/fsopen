import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather({ place }) {
    let [weather, updateWeather] = useState({});
    useEffect(() => {
        axios
            .get('http://api.weatherstack.com/current', {
                params: {
                    access_key: process.env.REACT_APP_API_KEY,
                    query: place
                }
            })
            .then(({ data }) => {
                const curr = data.hasOwnProperty("current") ? data.current : null;
                if (!curr) return;
                updateWeather({
                    temp: curr.temperature,
                    icon: {
                        src: curr.weather_icons[0],
                        alt: curr.weather_descriptions[0]
                    },
                    wind: `${curr.wind_speed} Kmph direction ${curr.wind_dir}`
                });
            })
    });
    if (Object.keys(weather).length === 0) return <p>Waiting for weather in {place}..</p>
    return (
        <div>
            <h2>Weather in {place}</h2>
            <p><strong>Temperature:</strong>{weather.temp}</p>
            <p><img src={weather.icon.src} alt={weather.icon.alt} /></p>
            <p><strong>Wind:</strong>{weather.wind}</p>
        </div>
    );
}

export default Weather