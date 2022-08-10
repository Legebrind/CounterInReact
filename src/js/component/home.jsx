import React from "react";
import Stopwatch from "./stopwatch.jsx";
import Countdown from "./countdown.jsx";
import SecondsCounter from "./secondsCounter.jsx";

const Home = () =>{
  return(
    <div><Stopwatch /><Countdown/><SecondsCounter/></div>
  )
}

export default Home;