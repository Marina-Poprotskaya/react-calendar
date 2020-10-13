import React, { useEffect, useState } from 'react';
import { getUserLocation } from './service';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

export default function Location() {

    const dispatch = useDispatch();
    const locationFromStore = useSelector((state) => state.location);

    useEffect(() => {
        dispatch(getUserLocation());
    }, [])

    return(
        <div className='weather-location-wrapper'>
            <div className='location'>
                <form className='location-form'>
                    <input type='search' className='location-input' placeholder='Searching city' required></input>
                    <button type='submit' className='location-button'>Search</button> 
                </form>
                <div  className='location-address'>
                    <div className='location-country'>{`Country: ${locationFromStore.country}`}</div>
                    <div className='location-city'>{`City: ${locationFromStore.city}`}</div>
                </div>
            </div>
        </div>
    )
} 