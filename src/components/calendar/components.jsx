import React from "react";
import "./style.css";

export default function Calendar() {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentDay = date.getDate();

    const previousMonth = month-1;
    // const nextMonth = month+1;

    const getDaysInMonth = (year, month) => {
        return new Date(year, month+1, 0).getDate();
    }

    const daysInCurrentMonth = getDaysInMonth(year, month);

    const daysInPreviousMonth = getDaysInMonth(year, previousMonth);

    const firstDayOfMonth = new Date(year, month).getDay();

    const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const lastDayIndex = daysInCurrentMonth + firstDayIndex-1;


    const numberOfCells = 42;
    const cellsForDate = new Array(numberOfCells).fill(1, 0, 42);
    const arrayOfCurrentDays = [];
    const arrayOfPrevDays = [];
    const arrayOfNextDays = [];
    
    for(let i = 1 ; i <= daysInCurrentMonth; i++){
        arrayOfCurrentDays.push(i);
    }
    
    for(let i = 1; i < (numberOfCells - lastDayIndex); i++) {
        arrayOfNextDays.push(i)
    }

    for(let i = 1; i <= daysInPreviousMonth; i++) {
        arrayOfPrevDays.push(i);
    }
    const arrOfPrevDaysForCalendar = arrayOfPrevDays.reverse().slice(0, firstDayIndex).reverse();

    const indexOfCurrentDayInArrOfCells = (arrayOfCurrentDays.findIndex((el) => el === currentDay)) + firstDayIndex;

    const renderDaysOfWeek = () => {
        const elements = cellsForDate.map((_, index) => {
        
        const getContent = () => {
        let content; 
            if(index < firstDayIndex) {
                content = arrOfPrevDaysForCalendar[index];
            }   
            if(index >= firstDayIndex && index <= lastDayIndex) {
                content = arrayOfCurrentDays[index-firstDayIndex];
            }
            if(index > lastDayIndex) {
                content = arrayOfNextDays[(index-numberOfCells)+arrayOfNextDays.length];
            }
            return content;
        }

        const getColor = () => {
            return index >= firstDayIndex && index <= lastDayIndex ?  'white' : 'rgba(128, 128, 128, 0.842)';
        }

        const getColorOfCurrentDay = () => {
            return index === indexOfCurrentDayInArrOfCells ? 'rgb(0, 149, 218)' : '';
        }
         
          return <div style = {{color: getColor(), background: getColorOfCurrentDay()}} className='days' key={index}>{getContent()}</div>;
        });
        return elements;
      }; 

    return(
        <div className="date-container">
            {renderDaysOfWeek()}
        </div>  
    )
}