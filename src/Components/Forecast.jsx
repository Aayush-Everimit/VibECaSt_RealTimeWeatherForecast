import React from 'react';

export default function Forecast({ data, cityImage }) {
    const { location } = data;
    const forecastDay = data.forecast.forecastday[0];

    return (
        <section id="Forecast">
            <div className="card" style={{ width: "100%" }}>
                {cityImage && <img src={cityImage} className="card-img-top" alt={`A view of ${location.name}`} />}
                <div className="card-body">
                    <p className="card-text">Forecast for {forecastDay.date}</p>
                </div>
                <ul className="forecast-info">
                    <li>Max Temp (°C): {forecastDay.day.maxtemp_c}</li>
                    <li>Min Temp (°C): {forecastDay.day.mintemp_c}</li>
                    <li>Chance of Rain: {forecastDay.day.daily_chance_of_rain}</li>
                </ul>
            </div>
        </section>
    );
}
