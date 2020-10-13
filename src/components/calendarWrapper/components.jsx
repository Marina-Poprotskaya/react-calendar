import React from 'react';
import Header from '../header/components';
import Main from '../main/components';

export default function MainCalendar(props) {
  return (
    <div className="calendar-wrapper">
      <Header onFormatedMonth={props.onFormatedMonth} />
      <Main
        onSearchingMonth={props.onSearchingMonth}
        onPreviousMonth={props.onPreviousMonth}
        onNextMonth={props.onNextMonth}
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
