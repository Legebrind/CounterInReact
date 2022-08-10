import React from "react";
import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  window.addEventListener('load', () => setRunning(true));
  return (
    <div className="stopwatch">
      <div className="numbers d-flex justify-content-center">
        <span className="bg-dark text-white">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span><span>:</span>
        <span className="bg-dark text-white">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span><span>:</span>
        <span className="bg-dark text-white">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons d-flex justify-content-center">
        <button type="button" className="btn btn-primary btn-lg m-4" onClick={() => setRunning(true)} onLoad={() => setRunning(true)}>Start</button>
        <button type="button" className="btn btn-danger btn-lg my-4" onClick={() => setRunning(false)}>Stop</button>
        <button type="button" className="btn btn-success btn-lg m-4" onClick={() => setTime(0)}>Reset</button>
      </div>
      
    </div>
  );
};

export default Stopwatch;