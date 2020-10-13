import React from 'react';
import Weather from '../weather/component';
import Location from '../location/component';
import Loader from '../loader/components';
import './style.css';

export default function WeatherAndLocation() {

    return(
        <div className='weather-location-wrapper'>
            <Loader />
            <Location />
            <Weather />
        </div>
    )
} 