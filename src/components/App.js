import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [timeLeft, setTimeleft] = useState(0);
  const [countDown, setCountDown] = useState(0);

  const handleKey = (event) => {
    if (event.key == "Enter") {
      let value = 0;
      if (!timeLeft) {
        value = 0;
      }
      try {
        value = parseInt(timeLeft);
        if (value <= 0) {
          value = 0;
        }
      } catch (error) {
        value = 0;
      }
      if (value > 0) {
        setCountDown(value);
      } else {
        setCountDown(0);
      }
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setTimeleft(value);
  };

  useEffect(() => {
    var intervalId;
    if (countDown > 0) {
      intervalId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId); //clearing the last
    };
  }, [countDown > 0]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            value={timeLeft}
            onChange={handleChange}
            onKeyDown={handleKey}
            // type="number"
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{countDown}</div>
    </div>
  );
};

export default App;
