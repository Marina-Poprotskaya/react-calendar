import React, { useEffect, useState } from 'react';
import { getUserLocation } from './service';
import { getWeather } from '../weather/service';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

export default function Location() {

    const dispatch = useDispatch();
    const geolocation = useSelector((state) => state.location);
    const location = useSelector((state) => state.weather)
    
    const [city, setCity] = useState('Unknown');
    const [country, setCountry] = useState('Unknown');
    
    useEffect(() => {
        dispatch(getUserLocation());
        setCity(geolocation.city);
        setCountry(geolocation.country);
    }, [geolocation.city,geolocation.country])
    
    useEffect(() => {
        setCity(location.city);
        setCountry(location.country);
    }, [location.city,location.country])
    
    
    const handleSubmit = (e) => {
        e.preventDefault();  
        dispatch(getWeather(e.target.childNodes[0].value));
    }


    return(
        <div className='weather-location-wrapper'>
            <div className='location'>
                <form className='location-form' onSubmit={handleSubmit}>
                    <input type='search' className='location-input' placeholder='Searching city' required></input>
                    <button type='submit' className='location-button'>Search</button> 
                </form>
                <div  className='location-address'>
                    <div className='location-country'>{`Country: ${country}`}</div>
                    <div className='location-city'>{`City: ${city}`}</div>
                </div>
            </div>
        </div>
    )
} 