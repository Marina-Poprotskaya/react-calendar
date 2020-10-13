
import {
    LOCATION_REQUEST,
    LOCATION_SUCCESS,
    LOCATION_FAIL,
  } from '../../constants.js';
  
  const initialState = {
        country: 'Unknown',
        city: 'Unknown',
        isLoading: false,
  };
  
  function locationReducer(state = initialState, action) {
    switch (action.type) {
      case LOCATION_REQUEST:
        return {
          ...state,
          ...action.payload,
        };
  
      case LOCATION_SUCCESS:
        return {
          ...state,
          ...action.payload,
        };
  
      case LOCATION_FAIL:
        return {
          ...state,
          ...action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export default locationReducer;