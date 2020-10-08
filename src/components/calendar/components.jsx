import React from "react";
import PropTypes from "prop-types";
import { numberOfCells } from "../../constants";
import "./style.css";

export default function Calendar({ month, year }) {
  const date = new Date();
  const currentDay = date.getDate();
  const previousMonth = month - 1;

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInCurrentMonth = getDaysInMonth(year, month);
  const daysInPreviousMonth = getDaysInMonth(year, previousMonth);
  const firstDayIndex = new Date(year, month).getDay();
  const lastDayIndex = daysInCurrentMonth + firstDayIndex-1;
  const cellsForDate = [...Array(numberOfCells)];
  const arrayOfCurrentDays = [...Array(daysInCurrentMonth)].map((_, i) => ++i);
  const arrOfPrevDaysForCalendar = [...Array(firstDayIndex)].map((_, i) => i += (daysInPreviousMonth-(firstDayIndex-1)));
  const arrayOfNextDaysForCalendar = [...Array(numberOfCells - lastDayIndex)].map((_, i) => i++);

  const renderDaysOfMonth = () => {
    const dayOfMonth = cellsForDate.map((_, index) => {
      const getContent = () => {
        if (index < firstDayIndex) {
          return arrOfPrevDaysForCalendar[index];
        }
        if (index >= firstDayIndex && index <= lastDayIndex) {
          return arrayOfCurrentDays[index - firstDayIndex];
        }
        if (index > lastDayIndex) {
          return arrayOfNextDaysForCalendar[
            index - numberOfCells + arrayOfNextDaysForCalendar.length
          ];
        }
      };

      const getColor = () => {
        return index >= firstDayIndex && index <= lastDayIndex
          ? "white"
          : "rgba(128, 128, 128, 0.842)";
      };

      const getColorOfCurrentDay = () => {
        const curMonth = date.getMonth();
        return index === (currentDay+firstDayIndex-1) && curMonth === month
          ? "rgb(0, 149, 218)"
          : "";
      };

      return (
        <div
          style={{ color: getColor(), background: getColorOfCurrentDay() }}
          className="day numbers"
          key={index}
        >
          {getContent()}
        </div>
      );
    });
    return dayOfMonth;
  };

  return <div className="date-container">{renderDaysOfMonth()}</div>;
}

Calendar.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
};
