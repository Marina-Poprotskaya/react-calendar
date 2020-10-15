import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Calendar = React.memo((props) => {
  const renderPrevMonthDays = props.prevMonthDaysForCalendar.map((el) => (
    <div key={`${el}-1`} className="day numbers not-active">
      {el}
    </div>
  ));

  const renderCurrentMonthDays = props.currentMonthDays.map((el, index) => (
    <div
      key={`${el}-2`}
      className={`day numbers active ${
        props.onActualDay(index) ? 'actual-day' : ''
      }`}
    >
      {el}
    </div>
  ));

  const renderNextMonthDays = props.nextMonthDaysForCalendar.map((el) => (
    <div key={`${el}-3`} className="day numbers not-active">
      {el}
    </div>
  ));

  return (
    <div className="date-container">
      {renderPrevMonthDays}
      {renderCurrentMonthDays}
      {renderNextMonthDays}
    </div>
  );
});

Calendar.propTypes = {
  onActualDay: PropTypes.func,
  prevMonthDaysForCalendar: PropTypes.array,
  currentMonthDays: PropTypes.array,
  nextMonthDaysForCalendar: PropTypes.array,
};

export default Calendar;
