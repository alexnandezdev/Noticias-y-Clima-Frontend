import { ReactNode } from "react";

export interface Weather {
    wind_speed: ReactNode;
    weather_descriptions: any;
    id: number;
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
  }
  
  export interface News {
    urlToImage: any;
    id: number;
    title: string;
    description: string;
    url: string;
  }
  
  export interface WeatherNewsData {
    current_weather: any;
    id: number;
    city: string;
    weather: Weather;
    news: News[];
    queryDate: string;
  }