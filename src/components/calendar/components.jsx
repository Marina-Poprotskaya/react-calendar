import React from "react";
import "./style.css";

export default function Calendar() {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const daysInMonth = new Date(year, month+1, 0).getDate();

    const firstDayOfMonth = new Date(year, month).getDay();

    const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const lastDayIndex = daysInMonth + firstDayIndex-1;

    const cellsForDate = new Array(42).fill(1, 0, 42);
    const arrayOfDays = [];

    for(let i = 1 ; i <= daysInMonth; i++){
        arrayOfDays.push(i);
    }

    const renderDaysOfWeek = () => {
        const elements = cellsForDate.map((_, index) => {
        const content = index >= firstDayIndex && index <= lastDayIndex ? arrayOfDays[index-firstDayIndex] : '';
          return <div className='days' key={index}>{content}</div>;
        });
        return elements;
      }; 

    return(
        <div className="date-container">
            {renderDaysOfWeek()}
        </div>  
    )
}