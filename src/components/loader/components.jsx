import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

export default function Loader() {
  const isLocationLoading = useSelector(state => state.location.isLoading);

  const isWeatherLoading = useSelector(state => state.weather.isLoading);

  let styles;
  if (isLocationLoading || isWeatherLoading) {
    styles = { display: 'block' };
  } else {
    styles = { display: 'none' };
  }
  return (
    <div className="loader main" style={styles}>
      <div className="spinner">
        <div className="spinner-cube">
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
