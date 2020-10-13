import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
} from '../../constants.js';

export function weatherRequest() {
  return {
    type: WEATHER_REQUEST,
    payload: {
      isLoading: true,
    },
  };
}

export function weatherSuccess(data) {
  return {
    type: WEATHER_SUCCESS,
    payload: {
      ...data,
      isLoading: false,
    },
  };
}

export function weatherFail(error) {
  return {
    type: WEATHER_FAIL,
    payload: {
      isLoading: false,
      error,
    },
  };
}
