import React from "react";
import Calendar from "../calendar/components";
import "./style.css";

export default function Main() {
  const getFormattedMonths = () => {
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    const date = new Date();
    const currentDate = `${months[date.getMonth()]} ${date.getFullYear()}`;
    return currentDate;
  };

  const daysOfWeeks = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  const renderDaysOfWeek = () => {
    const elements = daysOfWeeks.map((item, index) => {
      return <div className='days' key={index}>{item}</div>;
    });
    return elements;
  };

  return (
    <div className="main-wrapper">
      <div className="date-container">
        <div className="current-month">
          <div className="month">{getFormattedMonths()}</div>
          <div className="arrow-wrapper">
            <div className="arrow arrow-up"></div>
            <div className="arrow arrow-down"></div>
          </div>
        </div>
        <div className="days-of-week-wrapper">{renderDaysOfWeek()}</div>
      </div>
      <Calendar />
    </div>
  );
}
