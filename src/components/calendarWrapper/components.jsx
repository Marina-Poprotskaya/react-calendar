import React, { useState, useCallback, useMemo } from 'react';
import Header from '../header/components';
import Main from '../main/components';
import { MONTH, NUMBER_OF_CELLS } from '../../constants';

export default function MainCalendar() {
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
    `${date.getDate()} ${MONTH[date.getMonth()]} ${date.getFullYear()}`;

  const getSearchingMonth = () => `${MONTH[month]} ${year}`;

  const currentDay = date.getDate();
  const previousMonth = month - 1;

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const daysInCurrentMonth = getDaysInMonth(year, month);
  const daysInPreviousMonth = getDaysInMonth(year, previousMonth);
  const firstDayIndex = new Date(year, month).getDay();
  const lastDayIndex = daysInCurrentMonth + firstDayIndex - 1;
  const currentMonthDays = useMemo(() => [...Array(daysInCurrentMonth)].map((_, i) => ++i), [daysInCurrentMonth]);
  const prevMonthDaysForCalendar = useMemo(() => [...Array(firstDayIndex)].map(
    (_, i) => (i += daysInPreviousMonth - (firstDayIndex - 1)),
  ), [daysInPreviousMonth, firstDayIndex]);
  const nextMonthDaysForCalendar = useMemo(() => [
    ...Array(NUMBER_OF_CELLS - lastDayIndex - 1),
  ].map((_, i) => ++i), [lastDayIndex]);

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
    <div className="calendar-wrapper">
      <Header onFormatedMonth={getActualMonths} />
      <Main
        onSearchingMonth={getSearchingMonth}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
        month={month}
        year={year}
        currentMonthDays={currentMonthDays}
        prevMonthDaysForCalendar={prevMonthDaysForCalendar}
        nextMonthDaysForCalendar={nextMonthDaysForCalendar}
        onActualDay={isActualDay}
      />
    </div>
  );
}
