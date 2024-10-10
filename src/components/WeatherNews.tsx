import React from 'react';
import { WeatherNewsData } from '../types';
import './WeatherNews.css';

interface WeatherNewsProps {
  data: WeatherNewsData;
}

const WeatherNews: React.FC<WeatherNewsProps> = ({ data }) => {
  return (
    <div className="weather-news">
      <h2>News for {data.city}</h2>
      <div className="news-list">
        {data.news.map((item, index) => (
          <div key={index} className="news-item">
            {item.urlToImage && <img src={item.urlToImage} alt={item.title} />}
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherNews;