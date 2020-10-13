import { combineReducers } from 'redux';
import locationReducer from '../components/location/reducer';
import weatherReducer from '../components/weather/reducer';

const rootReducer = combineReducers({
    location: locationReducer,
    weather: weatherReducer,
});

export default rootReducer;