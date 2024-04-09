// src/Timer.js
import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeRemaining = () => {
    const targetDate = new Date("April 12, 2020 06:00:00");
    const now = new Date();

    const difference = now.getTime() - targetDate.getTime();

    if (difference > 0) {
      const oneDay = 1000 * 60 * 60 * 24;
      const days = Math.floor(difference / oneDay);
      const hours = Math.floor((difference % oneDay) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    } else {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Countdown Timer</h1>
      <div className="flex justify-center">
        <div className="bg-gray-200 rounded-md p-4 mr-2">
          <span className="text-4xl text-black font-bold">
            {timeRemaining.days}
          </span>
          <br />
          <span className="text-black">Days</span>
        </div>
        <div className="bg-gray-200 rounded-md p-4 mr-2">
          <span className="text-4xl text-black font-bold">
            {timeRemaining.hours}
          </span>
          <br />
          <span className="text-black">Hours</span>
        </div>
        <div className="bg-gray-200 rounded-md p-4 mr-2">
          <span className="text-4xl text-black font-bold">
            {timeRemaining.minutes}
          </span>
          <br />
          <span className="text-black">Minutes</span>
        </div>
        <div className="bg-gray-200 rounded-md p-4">
          <span className="text-4xl text-black font-bold">
            {timeRemaining.seconds}
          </span>
          <br />
          <span className="text-black">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
