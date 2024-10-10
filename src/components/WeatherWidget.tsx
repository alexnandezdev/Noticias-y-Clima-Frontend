import React from 'react';
import { Weather } from '../types';
import './WeatherWidget.css';

interface WeatherWidgetProps {
  weather: Weather;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
  return (
    <div className="weather-widget">
      <h2>Current Weather</h2>
      <div className="weather-info">
        <p className="temperature">{weather.temperature}°C</p>
        <p>{weather.weather_descriptions[0]}</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind: {weather.wind_speed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherWidget;