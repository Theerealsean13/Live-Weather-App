import { useState } from 'react';
import './Weather.css'; 

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'VITE_WEATHER_API_KEY';

  const fetchWeather = async () => {
    if (!city) return;
    try {
      setError('');
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-app-container">
      <div className="weather-card">
        <h1 className="app-title">Live Weather</h1>
        
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Enter city..." 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Search</button>
        </div>

        {error && <p className="error-text">{error}</p>}

        {weatherData && (
          <div className="weather-info fade-in">
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <h1 className="temperature">{Math.round(weatherData.main.temp)}°C</h1>
            <p className="description">{weatherData.weather[0].description}</p>
            
            <div className="weather-details">
              <div className="detail-box"><p>Humidity</p><p className="bold">{weatherData.main.humidity}%</p></div>
              <div className="detail-box"><p>Wind</p><p className="bold">{weatherData.wind.speed} m/s</p></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
