import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MainCalendar from './components/calendarWrapper/components';
import NavBar from './components/navbar/components';
import WeatherAndLocation from './components/weatherAndLocation/component';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={NavBar} />
        <Redirect from="/" to="/weatherAndLocation" />
        <Route
          exact
          path="/weatherAndLocation"
          component={WeatherAndLocation}
        />
        <Route path="/calendarWrapper" component={MainCalendar}></Route>
      </div>
    </Router>
  );
}

export default App;
