import React from "react";
import Clock from "../clock/component";
import "./style.css";

export default function Header() {
  const getFormattedDate = () => {
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const date = new Date();
    const currentDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}г.`;
    return currentDate;
  };

  return (
    <header className="header">
      <div className="date-container">
        <Clock />
        <div className="currentDate">{getFormattedDate()}</div>
      </div>
    </header>
  );
}
