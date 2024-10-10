import React from 'react';

interface WeatherDisplayProps {
  weather: {
    temperature: number;
    weather_descriptions: string[];
    wind_speed: number;
    humidity: number;
  };
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  return (
    <div className="weather-display">
      <h2>Estado del Tiempo</h2>
      <p>Temperatura: {weather.temperature}°C</p>
      <p>Descripcion: {weather.weather_descriptions[0]}</p>
      <p>Velocidad Viento: {weather.wind_speed} m/s</p>
      <p>Humedad: {weather.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;