import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from './service';
import './style.css';

export default function Weather() {
  const dispatch = useDispatch();

  const locationFromStore = useSelector(state => state.location);

  const { city } = locationFromStore;

  useEffect(() => {
    dispatch(getWeather(city));
  }, [city, dispatch]);

  const WeatherFromStore = useSelector(state => state.weather);

  return (
    <div className="weather">
      <div className="weather-item description">{`Description: ${WeatherFromStore.description}`}</div>
      <div className="weather-item temperature">{`Temperature: ${WeatherFromStore.temperature}°C`}</div>
      <div className="weather-item humidity">{`Humidity: ${WeatherFromStore.humidity}%`}</div>
      <div className="weather-item wind-direction">{`Wind direction: ${WeatherFromStore.windDirection}`}</div>
      <div className="weather-item wind-speed">{`Wind speed: ${WeatherFromStore.windSpeed.toFixed(1)}m/s`}</div>
    </div>
  );
}
