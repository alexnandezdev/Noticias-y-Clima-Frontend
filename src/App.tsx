import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import WeatherDisplay from './components/WeatherDisplay';
import NewsList from './components/NewsList';
import SearchHistory from './components/SearchHistory';
import { getWeatherNews, getSearchHistory } from './services/api';
import './App.css';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [newsData, setNewsData] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<string>('');

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const fetchWeatherNews = async (city: string) => {
    setLoading(true);
    setError(null);
    setCurrentCity(city);
    try {
      const data = await getWeatherNews(city);
      setWeatherData(data.current_weather);
      setNewsData(data.news);
      fetchSearchHistory();
    } catch (err) {
      setError('Error al obtener los datos. Por favor, intente de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchHistory = async () => {
    try {
      const history = await getSearchHistory();
      setSearchHistory(history);
    } catch (err) {
      console.error('Error al obtener el historial de búsqueda:', err);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Noticias y Estado del Tiempo</h1>
        <div className="weather-widget">
          {weatherData && <WeatherDisplay weather={weatherData} />}
        </div>
      </header>
      <main>
        <div className="content">
          <CitySearch onSearch={fetchWeatherNews} />
          {currentCity && <h3>Noticias para: {currentCity}</h3>}
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          <NewsList news={newsData} />
        </div>
        <aside>
          <SearchHistory history={searchHistory} onCitySelect={fetchWeatherNews} />
        </aside>
      </main>
    </div>
  );
};


export default App;