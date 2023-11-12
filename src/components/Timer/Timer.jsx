import { useState, useEffect, useRef } from "react";

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
  const [count, setCount] = useState(val);
  let intervalId = useRef(null);

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
    setCount(val);
  }
  return (
    <div>
      <h1>Timer</h1>
      <h1>{formatToString(count)}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
      <br />
      <br />
    </div>
  );
};
