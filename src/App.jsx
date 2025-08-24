import React, { useState } from 'react';
import CurrentWeather from '../src/Components/CurrentWeather.jsx';
import Astro from '../src/Components/Astro.jsx';
import Forecast from '../src/Components/Forecast.jsx';
import './App.css';
import image from './assets/Logo.png'

function App() {
    const [cityInput, setCityInput] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [cityImage, setCityImage] = useState(null);
    const [error, setError] = useState(null);

    const weatherAPIKey = "c96fb50e98e84cdd8ba81244252408";
    const pixabayAPIKey = "25540812-faf2b76d586c1787d2dd02736";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!cityInput) return;

        setError(null);
        setWeatherData(null);
        setCityImage(null);

        try {
            const weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${encodeURIComponent(cityInput)}&days=1`);
            if (!weatherResponse.ok) throw new Error("City not found. Please check the name and try again.");

            const data = await weatherResponse.json();
            setWeatherData(data);

            const imageResponse = await fetch(`https://pixabay.com/api/?key=${pixabayAPIKey}&q=${encodeURIComponent(data.location.name)}&image_type=photo&category=places`);
            const imageData = await imageResponse.json();
            if (imageData.hits && imageData.hits.length > 0) {
                setCityImage(imageData.hits[0].webformatURL);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className="logo">VibECaSt</div>
        <div className="hero-title">Real-Time Weather, Wherever You Are.</div>
        <div className="hero-subtitle">Weather that's Chill like you</div>

            <section style={{ maxWidth: '500px', margin: '5px 50px' }}>
                <div className="container-fluid">
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Enter City Name"
                            aria-label="Search"
                            value={cityInput}
                            onChange={(e) => setCityInput(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </section>

            {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}

            {weatherData && (
                <div className="weather-main-container">
                    <section className="current-weather-card">
                        <CurrentWeather data={weatherData} cityImage={cityImage} />
                    </section>

                    <section className="forecast-card">
                        <Forecast data={weatherData} />
                    </section>

                    <section className="astro-card">
                        <Astro data={weatherData} />
                    </section>
                </div>
            )}


        </>
    );
}

export default App;
