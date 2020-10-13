import React, { useState, useCallback } from 'react';
import MainCalendar from './components/calendarWrapper/components';
import { months, numberOfCells } from './constants';
import NavBar from './components/navbar/components';
import WeatherAndLocation from './components/weatherAndLocation/component';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  const date = new Date();

  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const handlePreviousMonth = () => {
    if (month <= 0) {
      setYear((prevYear) => prevYear - 1);
      setMonth(11);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (month >= 11) {
      setYear((prevYear) => prevYear + 1);
      setMonth(0);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  const getActualMonths = () =>
    `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

  const getSearchingMonth = () => `${months[month]} ${year}`;

  const currentDay = date.getDate();
  const previousMonth = month - 1;

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const daysInCurrentMonth = getDaysInMonth(year, month);
  const daysInPreviousMonth = getDaysInMonth(year, previousMonth);
  const firstDayIndex = new Date(year, month).getDay();
  const lastDayIndex = daysInCurrentMonth + firstDayIndex - 1;
  const arrayOfCurrentDays = [...Array(daysInCurrentMonth)].map((_, i) => ++i);
  const arrOfPrevDaysForCalendar = [...Array(firstDayIndex)].map(
    (_, i) => (i += daysInPreviousMonth - (firstDayIndex - 1)),
  );
  const arrayOfNextDaysForCalendar = [
    ...Array(numberOfCells - lastDayIndex - 1),
  ].map((_, i) => ++i);

  const isActualDay = useCallback(
    (index) => {
      const actualMonth = date.getMonth();
      const actualYear = date.getFullYear();
      return !!(
        index === currentDay - 1 &&
        actualMonth === month &&
        actualYear === year
      );
    },
    [month, currentDay, year, date],
  );

  return (
    <Router>
      <div className="container">
        <Route path="/" component={NavBar} />
        <Redirect from="/" to="/weatherAndLocation" />
        <Route exact path="/weatherAndLocation" component={WeatherAndLocation} />
        <Route path="/calendarWrapper">
          <MainCalendar
            onFormatedMonth={getActualMonths}
            onSearchingMonth={getSearchingMonth}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
            month={month}
            year={year}
            arrayOfCurrentDays={arrayOfCurrentDays}
            arrOfPrevDaysForCalendar={arrOfPrevDaysForCalendar}
            arrayOfNextDaysForCalendar={arrayOfNextDaysForCalendar}
            onActualDay={isActualDay}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
