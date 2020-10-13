import { weatherRequest, weatherSuccess, weatherFail } from './actions';
import { WEATHER_KEY } from '../../constants';
import { createTemplateObjectWithWeather } from './helpers';

const getWeather = (searchCity) => async (dispatch) => {
  try {
    dispatch(weatherRequest());
    const urlWeather = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchCity}&days=1&units=M&lang=en&key=${WEATHER_KEY}`;
    const response = await fetch(urlWeather);
    const data = await response.json();
    const weatherObject = createTemplateObjectWithWeather(data)
    dispatch(weatherSuccess(weatherObject));
  } catch (error) {
    console.error('error: ', error);
    dispatch(weatherFail(error));
  }
};

export { getWeather };