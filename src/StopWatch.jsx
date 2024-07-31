import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const formatTime = (second) => {
    const minutes = Math.floor(second /60);
    const secs = second % 60;
    return `${minutes}:${secs < 10 ? "0":""}${secs}`
  }

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <h1>Stopwatch</h1>
      <h2>time : {formatTime(timer)}</h2>
      <button
        onClick={() => {
          setisRunning((prev) => !prev);
        }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          setTimer(0)
          setisRunning(false)
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Stopwatch;
