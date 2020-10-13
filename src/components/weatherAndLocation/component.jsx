import React from 'react';
import Weather from '../weather/component';
import Location from '../location/component';
import './style.css';

export default function WeatherAndLocation() {

    return(
        <div className='weather-location-wrapper'>
            <Location />
            <Weather />
        </div>
    )
} 