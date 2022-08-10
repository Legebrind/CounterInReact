import React from "react";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        {            
         setTime((prevTime) => prevTime - 10);
        }
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  
  useEffect(() => {
    if(time == 0){
      setRunning(false)
    };
  },[time]);
  
  return (
    <div className="countdown my-4">
      <div className="numbers d-flex justify-content-center">
        <span className="bg-dark text-white">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
        </span>
        <span>:</span>
        <span className="bg-dark text-white">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </span>
        <span>:</span>
        <span className="bg-dark text-white">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div className="buttons d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary btn-lg m-4"
          onClick={() => {if(time > 0){setRunning(true)}}}
        >
          Start
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg my-4"
          onClick={() => setRunning(false)}
        >
          Stop
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg m-4"
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>

      <div className="buttons d-flex justify-content-center">
        <input type="number" id="seconds" placeholder="Time in seconds"></input>
        <button
          type="button"
          className="btn btn-success btn-lg mx-4"
          onClick={() =>
            document.getElementById("seconds").value >= 0
              ? setTime(document.getElementById("seconds").value * 1000)
              : alert("Numero mayor que 0")
          }
        >
          Set Time
        </button>
      </div>
    </div>
  );
};

export default Countdown;
