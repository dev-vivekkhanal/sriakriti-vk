import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ minutes, seconds, onTimerEnd }) => {
  const [time, setTime] = useState({
    minutes: minutes,
    seconds: seconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(timer);
        onTimerEnd(); // Trigger a callback when the timer reaches zero
      } else {
        setTime(prevTime => {
          if (prevTime.seconds === 0) {
            return {
              minutes: prevTime.minutes - 1,
              seconds: 59
            };
          } else {
            return {
              minutes: prevTime.minutes,
              seconds: prevTime.seconds - 1
            };
          }
        });
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [time, onTimerEnd]);

  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-gray-800">
        {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </p>
    </div>
  );
};

export default CountdownTimer;
