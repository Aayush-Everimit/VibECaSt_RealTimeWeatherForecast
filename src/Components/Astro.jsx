import React from 'react';

export default function Astro({ data, cityImage }) {
    const { location } = data;
    const { astro } = data.forecast.forecastday[0];

    return (
        <section id="Astronomy">
            <div className="card" style={{ width: "100%" }}>
                {cityImage && <img src={cityImage} className="card-img-top" alt={`A view of ${location.name}`} />}
                <div className="card-body">
                    <p className="card-text">Astronomy</p>
                </div>
                <ul className="astro-info">
                    <li>Sunrise: {astro.sunrise}</li>
                    <li>Sunset: {astro.sunset}</li>
                    <li>Moonrise: {astro.moonrise}</li>
                    <li>Moon Phase: {astro.moon_phase}</li>
                </ul>
            </div>
        </section>
    );
}
