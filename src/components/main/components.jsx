import React from "react";
import Calendar from "../calendar/components";
import PropTypes from "prop-types";
import { daysOfWeeks } from "../../constants";
import "./style.css";

export default function Main(props) {
  const renderDaysOfWeek = () => {
    const dayOfWeek = daysOfWeeks.map((item, index) => {
      return (
        <div className="day" key={index}>
          {item}
        </div>
      );
    });
    return dayOfWeek;
  };

  return (
    <div className="main-wrapper">
      <div className="date-container">
        <div className="current-month">
          <div className="month">{props.onSearchingMonth()}</div>
          <div className="arrow-wrapper">
            <div
              className="arrow arrow-up"
              onClick={props.onPreviousMonth}
            ></div>
            <div className="arrow arrow-down" onClick={props.onNextMonth}></div>
          </div>
        </div>
        <div className="days-of-week-wrapper">{renderDaysOfWeek()}</div>
      </div>
      <Calendar
        month={props.month}
        year={props.year}
        arrayOfCurrentDays={props.arrayOfCurrentDays}
        arrOfPrevDaysForCalendar={props.arrOfPrevDaysForCalendar}
        arrayOfNextDaysForCalendar={props.arrayOfNextDaysForCalendar}
        onActualDay={props.onActualDay}
      />
    </div>
  );
}

Main.propTypes = {
  onSearchingMonth: PropTypes.func,
  renderDaysOfWeek: PropTypes.func,
  month: PropTypes.number,
  year: PropTypes.number,
};
