
import React, { useEffect, useState } from 'react';

import './Timer.scss';

export default function Timer() {
  const [tenthlySecond, setTenthlySecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timeout = null;
    if (active) {
      timeout = setTimeout(() => {
        let ts = tenthlySecond;
        let s = second;
        let m = minute;

        ts++;


        if (ts === 100) {
          ts = 0;
          s++;

          if (s == 60) {
            s = 0;
            m++;
            m = m == 60 ? 0 : m;
          }
        }

        if (active) {
          setTenthlySecond(ts);
          setSecond(s);
          setMinute(m);
        }
      }, 10);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [tenthlySecond, second, minute, active]);

  const renderTime = () => {
    const m = minute >= 10 ? minute.toString() : `0${minute}`;
    const s = second >= 10 ? second.toString() : `0${second}`;
    const ts = tenthlySecond >= 10 ? tenthlySecond.toString() : `0${tenthlySecond}`;
    return <span className="clock">{m}:{s}:{ts}</span>;
  };

  const play = () => {
    setActive(true);
  };

  const pause = () => {
    setActive(false);
  };

  const reset = () => {
    setActive(false);
    setTenthlySecond(0);
    setSecond(0);
    setMinute(0);
  };

  return (
    <div id="timer" className="pb-module">
      <div className="timer-count module-timer-count">
        {renderTime()}
      </div>
      <div className="actions">
        <button onClick={reset} className="action-btn reset-timer">
          <i className="material-icons">restart_alt</i>
        </button>

        {active ?
          <button onClick={pause} className="action-btn pause-timer">
            <i className="material-icons">pause</i>
          </button>
          :
          <button onClick={play} className="action-btn play-timer">
            <i className="material-icons">play_arrow</i>
          </button>
        }
      </div>
    </div>
  );
}