
import React, { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="clock">{time}</div>
  );
}

const currentTime = () => {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  return `${hour}:${min}:${sec}`;
};

const updateTime = (k) => {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
};