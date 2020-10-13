import React, { useState, useEffect } from 'react';
import './style.css';

export function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const tick = () => {
    setCurrentTime(new Date());
  };
  useEffect(() => {
    const clockId = setInterval(() => tick(), 1000);
    return (() => clearInterval(clockId));
  });

  return <div className="currentTime">{currentTime.toLocaleTimeString()}</div>;
}
