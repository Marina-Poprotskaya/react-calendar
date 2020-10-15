import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../calendar/components';
import { DAYS_OF_WEEK } from '../../constants';
import './style.css';

export default function Main(props) {
  const renderDaysOfWeek = () => {
    const dayOfWeek = DAYS_OF_WEEK.map((item, index) => (
      <div className="day" key={index}>
        {item}
      </div>
    ));
    return dayOfWeek;
  };

  return (
    <div className="main-wrapper">
      <div className="date-container">
        <div className="current-month">
          <div className="month">{props.onSearchingMonth()}</div>
          <div className="arrow-wrapper">
            <div
              className="arrow arrow-up" onClick={props.onPreviousMonth} />
            <div className="arrow arrow-down" onClick={props.onNextMonth} />
          </div>
        </div>
        <div className="days-of-week-wrapper">{renderDaysOfWeek()}</div>
      </div>
      <Calendar
        month={props.month}
        year={props.year}
        currentMonthDays={props.currentMonthDays}
        prevMonthDaysForCalendar={props.prevMonthDaysForCalendar}
        nextMonthDaysForCalendar={props.nextMonthDaysForCalendar}
        onActualDay={props.onActualDay} />
    </div>
  );
}

Main.propTypes = {
  onSearchingMonth: PropTypes.func,
  renderDaysOfWeek: PropTypes.func,
  month: PropTypes.number,
  year: PropTypes.number,
};
