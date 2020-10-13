import {
    LOCATION_REQUEST,
    LOCATION_SUCCESS,
    LOCATION_FAIL,
  } from '../../constants.js';
  
  export function locationRequest() {
    return {
      type: LOCATION_REQUEST,
      payload: {
        isLoading: true,
      },
    };
  }
  
  export function locationSuccess(data) {
    return {
      type: LOCATION_SUCCESS,
      payload: { 
        ...data, 
        isLoading: false 
      },
    };
  }
  
  export function locationFail(error) {
    return {
      type: LOCATION_FAIL,
      payload: {
        isLoading: false,
        error,
      },
    };
  }