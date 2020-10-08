import React, { useState } from "react";
import Header from "./components/header/components";
import Main from "./components/main/components";
import { months } from './constants';

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
        />
      </div>
    </div>
  );
}

export default App;
