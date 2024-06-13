import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { fetchWeatherApi } from 'openmeteo'; // Import fetchWeatherApi from OpenMeteo

const root = document.getElementById('root');

// Render App component when weather data is fetched
const renderApp = async () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
};

// Fetch weather data and render App component
const fetchDataAndRenderApp = async () => {
  try {
    const params = {
      "latitude": 30.7726,
      "longitude": 79.4953,
      "start_date": "2024-02-08",
      "end_date": "2024-02-22",
      "hourly": ["temperature_2m", "relative_humidity_2m", "precipitation"]
    };
    const url = "https://archive-api.open-meteo.com/v1/archive";
    await fetchWeatherApi(url, params);
    renderApp();
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

fetchDataAndRenderApp();

reportWebVitals();
