import React from 'react';

export default function CurrentWeather({ data, cityImage }) {
    const { location, current } = data;

    return (
        <section id="CurrentWeather">
            <div className="card" style={{ width:"100%" }}>
                {cityImage && <img src={cityImage} className="card-img-top" alt={`A view of ${location.name}`} />}
                <div className="card-body">
                    <h5 className="card-title">
                        {location.name}, {location.country}
                    </h5>
                    <p className="card-text">Current Weather</p>
                </div>
                <ul className="current-weather-info">
                    <li>Last Updated: {current.last_updated}</li>
                    <li>Temp (°C): {current.temp_c}</li>
                    <li>Feels Like (°C): {current.feelslike_c}</li>
                    <li>Condition: {current.condition.text}</li>
                </ul>


            </div>
        </section>
    );
}
