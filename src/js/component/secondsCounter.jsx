import React from "react";
import Card from "./card.jsx";
import { useEffect, useState } from "react";

const SecondsCounter = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [timeString, setTimeString] = useState([]);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((pokemon) => pokemon + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  useEffect(() => {
    setRunning(true);
  }, []);
  useEffect(() => {
    setTimeString(time.toString().split("").reverse());

  }, [time]);
  return (
    <div className="numbers">
      <Card number={timeString[5]} />
      <Card number={timeString[4]} />
      <Card number={timeString[3]} />
      <Card number={timeString[2]} />
      <Card number={timeString[1]} />
      <Card number={timeString[0]} />
    </div>
  );
};

export default SecondsCounter;
