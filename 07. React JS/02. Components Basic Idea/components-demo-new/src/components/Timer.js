// import React from "react";
import { useState } from "react";

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.start);

  // const stateresult = React.useState()
  // stateresult[0] -> value
  // stateresult[2] -> function

  // Not good practice (use Effect is better)
  setTimeout(() => {
    // if (seconds >= 10) {
    //   setSeconds(0);
    // } else {
    //   setSeconds((oldSeconds) => oldSeconds + 1);
    // }
    setSeconds((oldSeconds) => oldSeconds + 1);
    //setSeconds(20)
    // setSeconds(seconds + 1); //this is take value, but not old necessary
  }, 1000);

  return (
    <div>
      <h2>Timer</h2>
      Time : {seconds}s
    </div>
  );
};

export default Timer;
