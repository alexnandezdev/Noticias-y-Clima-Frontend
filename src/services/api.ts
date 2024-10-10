import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { WeatherNewsData } from '../types';

const API_BASE_URL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

const handleAxiosError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    console.error('Axios error:', {
      message: axiosError.message,
      response: axiosError.response?.data,
      status: axiosError.response?.status,
      headers: axiosError.response?.headers,
    });
    if (axiosError.response?.status === 0 || axiosError.response?.status === 401) {
      console.error('Possible CORS error. Check CORS configuration on the server.');
    }
  } else {
    console.error('Unexpected error:', error);
  }
  throw error;
};

export const getWeatherNews = async (city: string): Promise<WeatherNewsData> => {
  try {
    console.log(`Fetching weather news for city: ${city}`);
    const config: AxiosRequestConfig = {
      url: `/weathernews/${encodeURIComponent(city)}`,
      method: 'get',
    };
    const response = await axiosInstance.request<WeatherNewsData>(config);
    console.log('API response:', response.data);
    if (!response.data) {
      throw new Error('No data received from API');
    }
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const getSearchHistory = async (): Promise<string[]> => {
  try {
    console.log('Fetching search history');
    const config: AxiosRequestConfig = {
      url: '/weathernews/history',
      method: 'get',
    };
    const response = await axiosInstance.request<string[]>(config);
    console.log('Search history response:', response.data);
    if (!response.data) {
      throw new Error('No data received from API');
    }
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};