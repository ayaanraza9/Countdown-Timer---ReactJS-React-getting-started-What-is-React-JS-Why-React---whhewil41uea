import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [timeLeft, setTimeleft] = useState(0);
  const [countDown, setCountDown] = useState(0);

  const handleKey = (event) => {
    if (event.key == "Enter") {
      if (timeLeft > 0) {
        setCountDown(timeLeft);
      }
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (!value) {
      value = 0;
    }
    try {
      value = parseInt(value);
      if (value <= 0) {
        value = 0;
      }
    } catch (error) {
      value = 0;
      // console.log("error is", error);
    }
    setTimeleft(value);
  };

  var intervalId;

  useEffect(() => {
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
