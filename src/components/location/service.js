import { locationRequest, locationSuccess, locationFail } from './actions';
import { GEOLOCATION_KEY } from '../../constants';
import { createTemplateObjectWithLocation } from './helpers'

const getUserLocation = () => async (dispatch) => {
  try {
    dispatch(locationRequest());
    const urlLocation = `https://ipinfo.io/json?token=${GEOLOCATION_KEY}`;
    const response = await fetch(urlLocation);
    const data = await response.json();
    const locationObject = createTemplateObjectWithLocation(data);
    dispatch(locationSuccess(locationObject));
  } catch (error) {
    dispatch(locationFail(error));
  }
};



export { getUserLocation };