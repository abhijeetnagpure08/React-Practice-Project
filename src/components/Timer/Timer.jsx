import { useState, useEffect, useRef } from "react";
import "./Timer.css";

function formatValue(value) {
  return value <= 9 ? `0${value}` : value;
}

const formatToString = (timeInSecs) => {
  const seconds = timeInSecs % 60;
  const minutes = Math.floor(timeInSecs / 60) % 60;
  const hours = Math.floor(timeInSecs / 3600);
  return `${formatValue(hours)}:${formatValue(minutes)}:${formatValue(
    seconds
  )}`;
};

export default Timer = () => {
  let val = 3600;
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(value);
  let intervalId = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    setCount(e.target.value);
  };

  useEffect(() => {
    const cleanupFunc = () => {
      console.log("cleanupFunc called");
      stopTimer();
    };
    return cleanupFunc;
  }, []);

  function startTimer() {
    if (intervalId.current != null) {
      return;
    }
    intervalId.current = setInterval(() => {
      console.log(`setInterval running`, Date.now());
      setCount((prevCount) => {
        if (prevCount < 1) {
          clearInterval(intervalId.current);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  }
  function stopTimer() {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }
  function resetTimer() {
    stopTimer();
    setCount(0);
  }
  return (
    <div>
      <h1>Timer</h1>
      <div className="container">
        <div className="first-box">
          <p>Enter Seconds</p>
          <input id="inp" type="text" onChange={handleChange} />
        </div>
        <div className="second-box">
          <div id="time">
            <h1>{formatToString(count)}</h1>
          </div>
          <button onClick={startTimer}>Start Timer</button>
          <button onClick={stopTimer}>Stop Timer</button>
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
      </div>
    </div>
  );
};
