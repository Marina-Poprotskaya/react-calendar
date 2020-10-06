import React, { useState, useEffect } from "react";
import "./style.css";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const tick = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  return <div className="currentTime">{currentTime.toLocaleTimeString()}</div>;
}
