import React, { Component, useState, useEffect} from "react";
import '../styles/App.css';



const App = () => {

  const [timeLeft , setTimeleft] = useState(0);

  const handleKey = (event) =>{
    if(event.key == "Enter"){
      var number = document.getElementById("timeCount").value;
      console.log(number);
      if(isNaN(number)){
        console.log("not a number");
        document.getElementById("timeCount").value='0';
        return;
      }
      setTimeleft(parseInt(number));
    }
  }

  var intervalId;

  useEffect(()=>{

      if(timeLeft > 0){
        intervalId = setInterval(()=>{
          setTimeleft((timeLeft)=>timeLeft-1);
        },1000);
      }
      return () => {
        clearInterval(intervalId); //clearing the last
      };
  },[handleKey]);

  return (
    
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKey} /> sec.
        </h1>
      </div>
      <div id="current-time">{timeLeft}</div>
    </div>
  )
}


export default App;
