import React, { useState, useCallback } from "react";
import Header from "./components/header/components";
import Main from "./components/main/components";
import { months, numberOfCells } from "./constants";

import "./App.css";

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

  const getActualMonths = () => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getSearchingMonth = () => {
    return `${months[month]} ${year}`;
  };

  const currentDay = date.getDate();
  const previousMonth = month - 1;

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInCurrentMonth = getDaysInMonth(year, month);
  const daysInPreviousMonth = getDaysInMonth(year, previousMonth);
  const firstDayIndex = new Date(year, month).getDay();
  const lastDayIndex = daysInCurrentMonth + firstDayIndex - 1;
  const arrayOfCurrentDays = [...Array(daysInCurrentMonth)].map((_, i) => ++i);
  const arrOfPrevDaysForCalendar = [...Array(firstDayIndex)].map(
    (_, i) => (i += daysInPreviousMonth - (firstDayIndex - 1))
  );
  const arrayOfNextDaysForCalendar = [
    ...Array(numberOfCells - lastDayIndex - 1),
  ].map((_, i) => ++i);

  const isActualDay = useCallback(
    (index) => {
      const actualMonth = date.getMonth();
      const actualYear = date.getFullYear();
      return index === currentDay - 1 &&
        actualMonth === month &&
        actualYear === year
        ? true
        : false;
    },
    [month, currentDay, year, date]
  );

  return (
    <div className="container">
      <div className="calendar-wrapper">
        <Header onFormaredMonth={getActualMonths} />
        <Main
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
      </div>
    </div>
  );
}

export default App;
