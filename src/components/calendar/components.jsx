import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Calendar(props) {
  const prevMonthDays = props.arrOfPrevDaysForCalendar.map((el) => (
    <div key={`${el}-1`} className="day numbers not-active">
      {el}
    </div>
  ));

  const currentMonthDays = props.arrayOfCurrentDays.map((el, index) => (
    <div
      key={`${el}-2`}
      className={`day numbers active ${
        props.onActualDay(index) ? "actual-day" : ""
      }`}
    >
      {el}
    </div>
  ));

  const nextMonthDays = props.arrayOfNextDaysForCalendar.map((el) => (
    <div key={`${el}-3`} className="day numbers not-active">
      {el}
    </div>
  ));

  return (
    <div className="date-container">
      {prevMonthDays}
      {currentMonthDays}
      {nextMonthDays}
    </div>
  );
}

Calendar.propTypes = {
  onActualDay: PropTypes.func,
  arrOfPrevDaysForCalendar: PropTypes.array,
  arrayOfCurrentDays: PropTypes.array,
  arrayOfNextDaysForCalendar: PropTypes.array,
};
