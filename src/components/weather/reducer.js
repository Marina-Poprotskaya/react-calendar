import {
    WEATHER_REQUEST,
    WEATHER_SUCCESS,
    WEATHER_FAIL,
  } from '../../constants.js';

  const initialState = {
    country: 'Unknown',
    city: 'Unknown',
    description: 'Unknown',
    temperature: 0,
    humidity: 0,
    windDirection: 'Unknown',
    windSpeed: 0,
    isLoading: false,
};
  
  function weatherReducer(state = initialState, action) {
    switch (action.type) {
      case WEATHER_REQUEST:
        return {
          ...state,
          ...action.payload,
        };
  
      case WEATHER_SUCCESS:
        return {
          ...state,
          ...action.payload,
        };
  
      case WEATHER_FAIL:
        return {
          ...state,
          ...action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export default weatherReducer;